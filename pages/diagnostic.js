
import { 

  Frame,
  Page

} from '@shopify/polaris';

import { contextDiagnostic } from '../states/diagnostic/DiagnosticProvider';
import TabsNav from '../components/Tabs/TabsNav';
import propsTabs from '../components/Tabs/data';

import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import Skeleton from '../components/Skeleton/Skeleton';
import Message from '../components/Message/Message';
import { useMutation } from 'react-query';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import Introduction from '../components/Introduction/Introduction';
import Questions from '../components/Questions/Questions';
import Result from '../components/Result/Result';
import ResultProvider from '../states/result/ResultProvider';


const Diagnostic = () => {

  const { 
      selectedTab,
      chageSelectedTab_Fn,
      getIntroduction_Fn ,
      getListQuestion_Fn,
      saveOrderListQuestion_Fn
    } = contextDiagnostic();

  const {tabsQuestion} = propsTabs();

  /* chage selected select */
  const handleTabChange = useCallback((selectedTabIndex) => chageSelectedTab_Fn(selectedTabIndex),[],);

    
  /* Geters api querys update state local */
  const {
      isLoading, 
      isFetching, 
      isError
      } = useQuery(['getintroduction'], getIntroduction_Fn);

  const {
      isError: errorQuestion,
      isLoading: loadQuestion
      } = useQuery(['getlistquestion'], getListQuestion_Fn);


  /* Updating order question list */

  const { 
      mutate, 
      isLoading: loadMutate, 
      isError: errorMutate, 
      isSuccess: succesMutate} = useMutation(saveOrderListQuestion_Fn)

  const actionGeneralDiagnostic = () => {
    mutate();
  }

    if(isLoading || isFetching){
      return (
          <Skeleton lineText={20}/>
        )
    }  
  return (
    <>
      <div className='container'>
        <Frame>
        <Page 
          title="My diagnostic" 
          primaryAction={{
              content: loadMutate ? <LoadingSpinner/> : 'Save' , 
              disabled: false,
              onAction: () => {
                actionGeneralDiagnostic();
              }
          }}>

            {/* tabs */}       
              <TabsNav 
                  tabs={tabsQuestion} 
                  selectedTab={selectedTab} 
                  handleTabChange={handleTabChange} 
              />
            {/* endtabs */}

            {/* content tabs */}
            <div className='content_tab'>
              { selectedTab === 0 && (<Introduction/>) }
              { selectedTab === 1 && (<Questions loadQuestion={loadQuestion}/>)}
              { selectedTab === 2 
                && (
                <ResultProvider> 
                  <Result/>
                </ResultProvider>)
              }
            </div> 
            {/* end content tabs */}


            {/* Message interactions */}
              {isError && <Message mesagge="Server Error" error={true}/>}
              {errorQuestion && <Message mesagge="Question load error" error={true} />}
              {errorMutate && <Message mesagge="Error saver order" error={true}/>}
              {succesMutate && <Message mesagge="Save order success" />}
            {/* Message interactions */}

        </Page>
        </Frame>
      </div>

</>
  )
}

export default Diagnostic
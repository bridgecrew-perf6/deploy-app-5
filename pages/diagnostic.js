
import { 

  Frame,
  Page

} from '@shopify/polaris';

import { contextDiagnostic } from '../states/diagnostic/DiagnosticProvider';

import IntroductionDetails from '../components/IntroductionDetails/IntroductionDetails';
import IntroductionPreview from '../components/IntroductionPreview/IntroductionPreview';

import QuestionPreview from '../components/QuestionPreview/QuestionPreview';
import QuestionList from '../components/QuestionList/QuestionList';
import QuestionDetails from '../components/QuestionDetails/QuestionDetails';

import ResultPreview from '../components/ResultPreview/ResultPreview';
import ResultDetails from '../components/ResultDetails/ResultDetails';

import CardPreview from '../components/CardPreview/CardPreview';
import TabsNav from '../components/Tabs/TabsNav';
import propsTabs from '../components/Tabs/data';

import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import Skeleton from '../components/Skeleton/Skeleton';
import Message from '../components/Message/Message';


const Diagnostic = () => {

  const { 
      selectedTab, 
      createQuestion, 
      chageSelectedTab_Fn,
      getIntroduction_Fn ,
      getListQuestion_Fn
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
      isLoading: loadQuestion,
      isFetching: fetchQuestion,
      isError: errorQuestion
      } = useQuery(['getlistquestion'], getListQuestion_Fn);

  
  if(isLoading || isFetching){
    return (
        <Skeleton/>
      )
  } 
  return (
    <>
      <div className='container'>
        <Frame>
        <Page 
          title="My diagnostic" 
          primaryAction={{
              content: 'Save', 
              disabled: false,
              onAction: () => {
                console.log("se hizo click en save");
              }
          }}>

            {/* tabs */}
            
              <TabsNav 
                  tabs={tabsQuestion} 
                  selectedTab={selectedTab} 
                  handleTabChange={handleTabChange} 
              />
            
            {/* endtabs */}
            <div className='content_tab'>
                <div className='content_tab--preview'>   
                  <CardPreview >                                
                      { selectedTab === 0 && (<IntroductionPreview/>) }
                      { selectedTab === 1 && (<QuestionPreview/>)}
                      { selectedTab === 2 && (<ResultPreview/>)}
                  </CardPreview>
                </div>                   
                
                
                {/* diagnostic customize */}
                <div className='content_tab--customize'>                
                  { 
                    selectedTab === 0 
                      && (<IntroductionDetails/>) 
                  }

                  { 
                    selectedTab === 1 
                      && (
                          !createQuestion 
                            ? <QuestionList/> 
                            : <QuestionDetails/>
                          ) 
                  }

                  { 
                    selectedTab === 2 
                      && (<ResultDetails/>) }  
                </div>
            </div> 

            {/* Message interactions */}
              {isError && <Message mesagge="Server Error" error={true}/>}
              {errorQuestion && <Message mesagge="Question load error" error={true} />}
            {/* Message interactions */}

        </Page>
        </Frame>
      </div>

</>
  )
}

export default Diagnostic
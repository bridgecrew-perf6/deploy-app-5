
import { 
        Page,
        Card 
} from '@shopify/polaris';

import IntroductionCustomize from '../components/diagnostic/subComponents/introduction/IntroductionCustomize';
import { contextDiagnostic } from '../src/stateGlobal/diagnostic/DiagnosticProvider';
import QuestionList from '../components/QuestionList/QuestionList';
import ResultCustomize from '../components/diagnostic/subComponents/result/ResultCustomize';
import IntroductionTab from '../components/diagnostic/subComponents/introduction/IntroductionTab';
import QuestionTab from '../components/diagnostic/subComponents/questions/QuestionTab';
import ResultTab from '../components/diagnostic/subComponents/result/ResultTab';
import CardTitle from '../components/CardTitle';
import TabsNav from '../components/Tabs/TabsNav';
import propsTabs from '../components/Tabs/data';
import QuestionDetails from '../components/QuestionDetails/QuestionDetails';
import { useCallback } from 'react';
const Diagnostic = () => {

  const {tabsQuestion} = propsTabs();

  const { 
      selectedTab, 
      createQuestion, 
      chageSelectedTab_Fn 
    } = contextDiagnostic();
    

/* chage selected select */
  const handleTabChange = useCallback(
    (selectedTabIndex) => chageSelectedTab_Fn(selectedTabIndex),
    [],
  );
  

  return (
    <>
      <div className='container'>
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
            <div className='content-tab-customize'>
                <div className='card-diagnostic--tab'>   
                  <CardTitle >                                
                      { selectedTab === 0 && (<IntroductionTab/>) }
                      { selectedTab === 1 && (<QuestionTab/>)}
                      { selectedTab === 2 && (<ResultTab/>)}
                  </CardTitle>
                </div>                   
                
                
                {/* diagnostic customize */}
                <div className='card-diagnostic--customize'>                
                  { 
                    selectedTab === 0 
                      && (<IntroductionCustomize/>) 
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
                      && (<ResultCustomize/>) }  
                </div>
            </div> 
        </Page>
      </div>

</>
  )
}

export default Diagnostic
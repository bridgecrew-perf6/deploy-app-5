
import { 
        Page,
        Card 
} from '@shopify/polaris';


import IntroductionCustomize from '../components/diagnostic/subComponents/introduction/IntroductionCustomize';
import { contextDiagnostic } from '../src/stateGlobal/diagnostic/DiagnosticProvider';
import QuestionCustomize from '../components/diagnostic/subComponents/questions/QuestionCustomize';
import ResultCustomize from '../components/diagnostic/subComponents/result/ResultCustomize';
import IntroductionTab from '../components/diagnostic/subComponents/introduction/IntroductionTab';
import QuestionTab from '../components/diagnostic/subComponents/questions/QuestionTab';
import ResultTab from '../components/diagnostic/subComponents/result/ResultTab';
import CardTitle from '../components/CardTitle';
import TabsNav from '../components/Tabs/TabsNav';
import propsTabs from '../components/Tabs/data';

const Diagnostic = () => {

  const { selectedTab } = contextDiagnostic();
  const {tabsQuestion} = propsTabs();
  

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
            
              <TabsNav tabs={tabsQuestion}/>
            
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
                  { selectedTab === 0 && (<IntroductionCustomize/>) }
                  { selectedTab === 1 && (<QuestionCustomize/>) }
                  { selectedTab === 2 && (<ResultCustomize/>) }  
                </div>
            </div> 
        </Page>
      </div>

</>
  )
}

export default Diagnostic
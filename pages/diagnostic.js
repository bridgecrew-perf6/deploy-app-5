import React, { useState , useCallback} from 'react'
import { 
        Heading, 
        Page, 
} from '@shopify/polaris';
import NavBar from '../components/NavBar';
import DiagnosticTabs from '../components/diagnostic/DiagnosticTabs';
import IntroductionCustomize from '../components/diagnostic/subComponents/introduction/IntroductionCustomize';
import { contextDiagnostic } from '../src/stateGlobal/diagnostic/DiagnosticProvider';
import QuestionCustomize from '../components/diagnostic/subComponents/questions/QuestionCustomize';
import ResultCustomize from '../components/diagnostic/subComponents/result/ResultCustomize';
import IntroductionTab from '../components/diagnostic/subComponents/introduction/IntroductionTab';
import QuestionTab from '../components/diagnostic/subComponents/questions/QuestionTab';
import ResultTab from '../components/diagnostic/subComponents/result/ResultTab';


const Diagnostic = () => {

  const { selectedTab } = contextDiagnostic();


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
          <Heading >

            {/* tabs */}
            <div className='card-diagnostic--nav'>
              <DiagnosticTabs/>
            </div>
            {/* endtabs */}

            <div className='card-diagnostic--tab'>
                         
              { selectedTab === 0 && (<IntroductionTab/>) }
              { selectedTab === 1 && (<QuestionTab/>)}
              { selectedTab === 2 && (<ResultTab/>)}

            </div>                   
            
            {/* diagnostic customize */}
            <div className='card-diagnostic--customize'>
              
              { selectedTab === 0 ? (<IntroductionCustomize/>) : ""}
              { selectedTab === 1 ? (<QuestionCustomize/>) : ""}
              { selectedTab === 2 ? (<ResultCustomize/>) : ""}
            </div>
          
          </Heading>
        </Page>
      </div>

</>
  )
}

export default Diagnostic
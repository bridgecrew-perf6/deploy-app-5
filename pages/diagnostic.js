import React, { useState , useCallback} from 'react'
import { 
        Heading, 
        Page, 
} from '@shopify/polaris';
import NavBar from '../components/NavBar';
import DiagnosticTabs from '../components/DiagnosticTabs';
import IntroductionCustomize from '../components/subComponents/introduction/IntroductionCustomize';
import { contextState } from '../src/stateGlobal/StateProvider';
import QuestionCustomize from '../components/subComponents/questions/QuestionCustomize';
import ResultCustomize from '../components/subComponents/result/ResultCustomize';


const Diagnostic = () => {

  const { selectedTab } = contextState();


  return (
    <>
    <NavBar />
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
            <div className='card-diagnostic--tab'>
              <DiagnosticTabs/>
            </div>
            {/* endtabs */}
            
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
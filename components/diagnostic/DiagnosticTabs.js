import React, { useState , useCallback} from 'react'
import { 
  Card, 
  Heading, 
  Image, 
  Page, 
  TextContainer, 
  Tabs 
} from '@shopify/polaris';
import IntroductionTab from './subComponents/introduction/IntroductionTab';
import QuestionTab from './subComponents/questions/QuestionTab';
import ResultTab from './subComponents/result/ResultTab';
import {contextDiagnostic} from '../../src/stateGlobal/diagnostic/DiagnosticProvider';

const DiagnosticTabs = () => {

  
  const { selectedTab, chageSelectedTab_Fn } = contextDiagnostic();

  const handleTabChange = useCallback(
    (selectedTabIndex) => chageSelectedTab_Fn(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'tab_introduction',
      content: '1. Introduction',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'tab_questions',
      content: '2. Questions',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'tab_result',
      content: '3. Result',
      panelID: 'repeat-customers-content-1',
    }
  ];

  return (
      
        <Card>
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
            <Card.Section >
                            
              { selectedTab === 0 ? (<IntroductionTab/>) : ""}
              { selectedTab === 1 ? (<QuestionTab/>) : ""}
              { selectedTab === 2 ? (<ResultTab/>) : ""}
                          
            </Card.Section>
          </Tabs>
        </Card>

  )
}

export default DiagnosticTabs
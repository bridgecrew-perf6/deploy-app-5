import React, { useCallback} from 'react'

import { 
  Card, 
  Tabs 
} from '@shopify/polaris';
import {contextDiagnostic} from '../../src/stateGlobal/diagnostic/DiagnosticProvider';

const TabsNav = ({tabs}) => {
 
  const { selectedTab, chageSelectedTab_Fn } = contextDiagnostic();

  const handleTabChange = useCallback(
    (selectedTabIndex) => chageSelectedTab_Fn(selectedTabIndex),
    [],
  );
  
  return (     
        <Card>
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          </Tabs>
        </Card>
  )
}

export default TabsNav
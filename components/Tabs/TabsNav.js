import React, { useCallback} from 'react'

import { 
  Card, 
  Tabs 
} from '@shopify/polaris';
import {contextDiagnostic} from '../../src/stateGlobal/diagnostic/DiagnosticProvider';

const TabsNav = ({tabs, selectedTab, handleTabChange}) => {
 
  
  
  return (     
        <Card>
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          </Tabs>
        </Card>
  )
}

export default TabsNav
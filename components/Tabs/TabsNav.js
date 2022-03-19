
import { 
  Card, 
  Tabs 
} from '@shopify/polaris';

import { TabsCustom } from './styles';

const TabsNav = ({tabs, selectedTab, handleTabChange}) => {
 
  
  
  return (     
        <TabsCustom>
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          </Tabs>
        </TabsCustom>
  )
}

export default TabsNav
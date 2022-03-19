import styled from "styled-components";
import theme from "../../styles/theme";


export const TabsCustom = styled.div`
  
.Polaris-Tabs__Tab--selected {
  .Polaris-Tabs__Title {
    ::before{
      background: ${theme.colors.purple};
    }
  }
}

`;
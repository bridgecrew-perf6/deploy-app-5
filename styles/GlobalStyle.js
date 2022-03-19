
import { createGlobalStyle } from 'styled-components'
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily.segoe};
  }


  .Polaris-Tabs__Wrapper {
    background: #f6f6f7;
  }

  .Polaris-Card {
    border: 1px solid ${theme.colors.greyLight}
  }
  .content_tab--preview{
    width: 60%; 
  } 
  .content_tab--customize{
    width: 38%;
  }
  .content_tab{
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }
`

export default GlobalStyle
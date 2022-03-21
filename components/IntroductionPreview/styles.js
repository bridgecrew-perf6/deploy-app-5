import styled from "styled-components";
import theme from "../../styles/theme";


export const Div = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  min-height: 339px;
  justify-content: center;
  padding: 0 60px;

  h1 {
    ${theme.textBoldTtitle};
    font-size: 20px;
    margin-bottom: 4px;
  }

  p {
    color: ${theme.colors.greyDark};
    text-align: center;
  }

  button {
    margin-top: 24px;
  }
`
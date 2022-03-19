import styled from "styled-components";
import theme from "../../styles/theme";


export const Div = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem;
  max-width: 400px;

  h1 {
    ${theme.textBoldTtitle};
    font-size: 20px;
    margin-bottom: 4px;
  }

  p {
    color: ${theme.colors.greyDark};
    text-align: justify;
  }

  button {
    margin-top: 24px;
  }
`
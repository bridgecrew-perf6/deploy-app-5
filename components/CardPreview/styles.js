import styled from "styled-components";
import theme from "../../styles/theme";


export const WindowStyle = styled.div`

  display: block;
  border: 1px solid ${theme.colors.greyLight};
  min-height: 339px;
  margin: 25px 0 70px 0;

  > span {
    display: flex;
    align-items: center;
    height: 26px;
    background: #F1F2F3;
    margin-bottom: 20px;

    svg {
      margin-left: 17px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
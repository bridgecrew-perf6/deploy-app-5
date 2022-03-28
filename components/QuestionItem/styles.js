import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const Div = styled.div(() => {


  return css`
    
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      height: 44px;
      padding: 0 12px;
      margin: 6px 0;
      border: 1px solid ${theme.colors.inputBorder};
      border-radius: 5px;
      ${theme.shadow}
      cursor: pointer;
      background: white;

      &.active {
        background: ${theme.colors.btnHover};
      }
      

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        p {
          max-width: 230px;
          margin-left: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    `;

})
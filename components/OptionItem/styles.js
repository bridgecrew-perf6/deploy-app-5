import styled, { css } from "styled-components";

export const Div = styled.div(({ justifyC }) => {

  return css`
    display: flex;
    align-items: center;
    justify-content: ${justifyC || 'space-between' } ;
    padding: 5px;
    width: 94%;
    height: 56px;
    border: 1px solid #BABFC3;
    border-radius: 9px;

    div {
      display: flex;
      align-items: center;
    }
    

  `;

})



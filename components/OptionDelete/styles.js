import styled, { css } from "styled-components";

export const Div = styled.div(() => {

  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;

    svg {
      cursor: pointer;
    }
  `;

})
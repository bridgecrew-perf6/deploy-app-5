import styled, { css } from "styled-components"


export const LabelStyles = styled.label(() => {

  return css`
    height: 20px;
    width: 110px;
    overflow: hidden;
    margin-left: 10px;
    cursor: pointer;
    
    :hover {
      border-radius: 0.3rem;
    }
    :focus {
      outline: 1px solid #b3b3b3;

    }
  `;
})

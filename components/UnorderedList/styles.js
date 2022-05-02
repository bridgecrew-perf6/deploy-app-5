import styled, { css } from "styled-components";


export const ListStyle = styled.ul(() => {

  return css`
    font-size: 10px;
    list-style: none;

    li {
      display: flex;
      align-items: start;
      margin: 3px 5px;

      span {
        line-height: 15px;
        margin-top: 1px;
      }

      svg {
        width: 12px;
        min-width: 12px;
        margin-right: 3px;
      }
    }
  `

});
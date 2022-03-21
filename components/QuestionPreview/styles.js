import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div(() => {

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 339px;
    justify-content: center;

    h1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 11px;
    }

    span{
      display: block;
      height: 38px;
      margin: 0.6rem 0;
      padding: 0.5rem;
      border-radius: 0.3rem;
      border: 1px solid ${theme.colors.inputBorder};
      width: 300px;
    }
    
  `
});

export const Question = styled.div(({option}) => {

  if(option === 'image' || option === 'color'){

    return css`
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;  
      }

      span {
        width: 170px;  
        height: 63px;
        border-radius: 9px;
        display: flex;
        align-items: center;
      }
    `
  }

  return css`
  
  `
});
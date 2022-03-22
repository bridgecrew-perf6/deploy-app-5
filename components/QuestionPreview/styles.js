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
        gap: 12px;  
      }

      span {
        width: 170px;  
        height: 63px;
        border-radius: 9px;
        display: flex;
        align-items: center;

        >p {
          max-width: 105px;
          margin-left: 8px;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    `
  }

});

export const ColorBg = styled.div(({bgColor})=> {

    return css`
      background-color: ${bgColor};
      width: 50px;
      height: 50px;
      border-radius: 9px;
      border: 1px solid;
    `
})

export const Ptext = styled.p(({index, option}) => {

  if(option === 'choice'){
    let result = printToLetter(index);
  
    return css`
      ::before {
        position: relative;
        margin: 0 10px 0 6px;
        content: '${result}';
        font-size: 20px;
        font-weight: 600;
        top: 2px;
      }
  `;
  }
  }) 

function printToLetter(number){

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  const result = alphabet[number];

  return result;

}


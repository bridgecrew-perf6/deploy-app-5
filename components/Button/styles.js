import React from 'react'
import styled, {css} from 'styled-components'

export const ButtonStyles = styled.button(({btnText, wBtn}) => {

  if(btnText){
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${wBtn || '90px'} ;
        height: 36px;
        background:  #FFFFFF;
        border: 1px solid #C9CCCF;
        border-radius: 5px;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
 
          &:hover {
            background: #f7f7f7;
            cursor: pointer;
          }
      `
  }else {
    return css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        &:hover {
          cursor: pointer;
        }
    `
  }
  
}

)



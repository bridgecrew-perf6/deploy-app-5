import React from 'react'
import {ButtonStyles} from './styles';
const Button = ({btnText, btnSvg, eventAction, wBtn}) => {
 
  return (
      
      <ButtonStyles 
        onClick={eventAction}
        bgColor="black"
        btnText={btnText}
        wBtn={wBtn}
        >
        {btnText}
        {btnSvg}
      </ButtonStyles>
  )
}

export default Button
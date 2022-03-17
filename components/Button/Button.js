import React from 'react'
import {ButtonStyles} from './styles';
const Button = ({btnText, btnSvg, eventAction}) => {
 
  return (
      
      <ButtonStyles 
        onClick={eventAction}
        bgColor="black"
        btnText={btnText}
        >
        {btnText}
        {btnSvg}
      </ButtonStyles>
  )
}

export default Button
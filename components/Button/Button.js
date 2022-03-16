import React from 'react'
import {ButtonStyles} from './styles';
const Button = ({btnText="text", btnSvg, eventAction}) => {
 
  return (
      
      <ButtonStyles 
        onClick={eventAction}
        bgColor="black"
        >
        {btnText}
        {btnSvg}
      </ButtonStyles>
  )
}

export default Button
import React from 'react'
import {ButtonStyles} from './styles';
const Button = ({btnText, btnSvg, eventAction, wBtn, mBtn}) => {
 
  return (
      
      <ButtonStyles 
        onClick={eventAction}
        btnText={btnText}
        wBtn={wBtn}
        mBtn={mBtn}
        >
        {btnText}
        {btnSvg}
      </ButtonStyles>
  )
}

export default Button
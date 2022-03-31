import React from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import {ButtonStyles} from './styles';
const Button = ({btnText, btnSvg, eventAction, wBtn, mBtn, loadingState}) => {
 
  return (
      
      <ButtonStyles 
        onClick={eventAction}
        btnText={btnText}
        wBtn={wBtn}
        mBtn={mBtn}
        >
        {loadingState ? <LoadingSpinner/> : btnText}
        
        {btnSvg}
      </ButtonStyles>
  )
}

export default Button
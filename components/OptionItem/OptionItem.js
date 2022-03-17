import React, { useState } from 'react'
import Img from '../Img/Img';
import { Div } from './styles';

const OptionItem = ({children, urlImg}) => {

  return (
    <Div>
      <Img urlImg={urlImg}/>  {children} 
    </Div>
  )
}

export default OptionItem
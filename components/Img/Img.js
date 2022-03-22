
import React from 'react'
import { ImgStyle } from './styles'

const Img = ({urlImg, wImg, hImg}) => {
  return (
    
      <ImgStyle 
        src={urlImg}
        wImg={wImg}
        hImg={hImg}  
         />
    
  )
}

export default Img

import React from 'react'
import { ImgStyle } from './styles'

const Img = ({urlImg, wImg, hImg}) => {
  return (
    
      <ImgStyle 
        loader={urlImg}
        src={urlImg}
        wImg={wImg}
        hImg={hImg}  
         />
    
  )
}

export default Img
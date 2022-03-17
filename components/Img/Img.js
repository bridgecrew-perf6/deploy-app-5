
import React from 'react'
import { ImgStyle } from './styles'

const Img = ({urlImg}) => {
  return (
    <div>
      <ImgStyle src={urlImg}  width="42.3" height="42.3" />
    </div>
  )
}

export default Img
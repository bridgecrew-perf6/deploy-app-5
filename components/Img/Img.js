import Image from 'next/image'
import React from 'react'

const Img = ({urlImg}) => {
  return (
    <div>
      <Image src={urlImg} alt="me" width="42.3" height="42.3" />
    </div>
  )
}

export default Img
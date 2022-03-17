import React from 'react'
import { DeleteSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const OptionDelete = ({children}) => {
  return (
    <Div>
      { children } <DeleteSvg/>
    </Div>
  )
}

export default OptionDelete
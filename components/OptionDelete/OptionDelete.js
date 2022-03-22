import React from 'react'
import { DeleteSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const OptionDelete = ({children, actionDelete}) => {
  return (
    <Div >
      { children } <div onClick={actionDelete}><DeleteSvg /></div>
    </Div>
  )
}

export default OptionDelete
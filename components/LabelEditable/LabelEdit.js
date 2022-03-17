import React from 'react'
import { LabelStyles } from './styles'

const LabelEdit = ({dataId, handleTagEditable, textLabel}) => {
  return (
    <LabelStyles
      data-id={dataId}
      contentEditable="true"
      suppressContentEditableWarning="true" 
      onBlur={handleTagEditable}>
      {textLabel}
  </LabelStyles>
  )
}

export default LabelEdit
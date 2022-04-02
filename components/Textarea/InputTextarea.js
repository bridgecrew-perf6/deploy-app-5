import React from 'react'
import { Textarea } from './styles'

const InputTextarea = ({dataId, nameInput, handle, valueInput, labelText}) => {
    return (
      <>
      <p>{labelText}</p>
      <Textarea
        data-id={dataId}
        type="text"
        autoComplete="off"
        name={nameInput}
        onChange={handle}
        value={valueInput}
      > </Textarea>
      </>
    )
}

export default InputTextarea
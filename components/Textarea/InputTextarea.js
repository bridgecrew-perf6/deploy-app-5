import React from 'react'
import { Textarea } from './styles'

const InputTextarea = ({dataId, nameInput, handle, valueInput, labelText, wTxtarea}) => {
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
        wTxtarea={wTxtarea}
      > </Textarea>
      </>
    )
}

export default InputTextarea
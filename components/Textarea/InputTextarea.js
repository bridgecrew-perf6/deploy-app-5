import React from 'react'

const InputTextarea = ({dataId, nameInput, handle, valueInput}) => {
    return (
      <textarea
        data-id={dataId}
        type="text"
        autoComplete="off"
        name={nameInput}
        onChange={handle}
        value={valueInput}
      > </textarea>
    )
}

export default InputTextarea
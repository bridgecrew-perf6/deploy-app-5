import React from 'react'

const InputTextarea = ({nameInput, handle, valueInput}) => {

  console.log(nameInput, handle, valueInput);
    return (
      <textarea
        type="text"
        autoComplete="off"
        name={nameInput}
        onChange={handle}
        value={valueInput}

      > </textarea>
    )
}

export default InputTextarea
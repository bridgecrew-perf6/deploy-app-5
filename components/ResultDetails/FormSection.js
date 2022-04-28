import React from 'react'
import InputCustom from '../Input/InputCustom'
import InputTextarea from '../Textarea/InputTextarea'

const FormSection = ({content:{title, subtitle, parragrah}, handleChangeText}) => {
  return (
    <>
      <InputCustom
          labelText='Title'
          nameInput="title"
          valueInput={title}
          handle={handleChangeText}
        />
        <InputCustom
          labelText='Subtitle'
          nameInput="subtitle"
          valueInput={subtitle}
          handle={handleChangeText}
        />
        <InputTextarea
          labelText='Parragrah'
          nameInput="parragrah"
          handle={handleChangeText}
          valueInput={parragrah}
        />
    </>
  )
}

export default FormSection
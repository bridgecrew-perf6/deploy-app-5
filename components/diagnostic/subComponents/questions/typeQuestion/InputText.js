import React from 'react'
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const InputText = () => {

  const {question: {type}} = contextDiagnostic();
  console.log(type);
  return (
    <>
    {
      type.map((elemen) => {
        return <input type='text' value={elemen.text} />
      })

    }
    
    </>
  )
}

export default InputText
import React from 'react'
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider';

const MultipleOptionText = () => {
  const {question: {type}} = contextDiagnostic();
 
  return (
    <>
    {
      type.map((elemen, index) => {
        return <div key={index}><input type='text' /></div>

      })
    } 
    </>
  )
}

export default MultipleOptionText
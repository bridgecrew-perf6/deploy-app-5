import { Card } from '@shopify/polaris';
import React from 'react'
import styleInput from '../../../../../public/styled/components/styleInput';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

/* Props Component = <InputCustom/>
  ( typeInput=default text optional, 
    nameInput=name, 
    handle=functionChange, 
    valueInput=value, 
    hideValue=(true o false, optional-> field not need value)) */

  
const InputText = ({typeInput="text", nameInput, handle, valueInput, hideValue = false}) => {

  return (
    <>
         
        <input 
          type={typeInput} 
          name={nameInput}
          onChange={handle}
          value={ !hideValue ? valueInput : null}
          autoComplete="off"
          className='input'
        />
        
        <style jsx>
          {styleInput}
        </style>
    </>
  )
}

export default InputText
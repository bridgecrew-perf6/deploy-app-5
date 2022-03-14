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

  
const InputCustom = ({typeInput="text", nameInput, handle, valueInput, hideValue = false, classCustom = 'input', checkedCheck = true}) => {

 
  return (
    <>
        <input 
          type={typeInput} 
          name={nameInput}
          onChange={handle}
          value={ !hideValue ? valueInput : null}
          autoComplete="off"
          className={classCustom}
        /> 
           
        <style jsx>
          {styleInput}
        </style>
    </>
  )
}

export default InputCustom
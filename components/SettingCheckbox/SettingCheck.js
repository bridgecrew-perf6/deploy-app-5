import React from 'react'
import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider';
import InputCustom from '../Input/InputCustom';
import { Div } from './styles';


const SettingCheck = ({textSetting, nameInput, idInput, handleCheckStatus}) => {

  return (

        <Div>
          <p>{textSetting}</p>
            <InputCustom
              typeInput='checkbox'
              nameInput={nameInput}
              handle={handleCheckStatus}
              idInput={idInput}
            />
          <label htmlFor={idInput}></label>
        </Div>   
  )
}

export default SettingCheck

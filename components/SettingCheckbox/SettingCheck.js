import React from 'react'
import InputCustom from '../Input/InputCustom';
import { Div } from './styles';


const SettingCheck = ({textSetting, nameInput, idInput, handleCheckStatus, status}) => {

  console.log(status);
  return (

        <Div >
          <p>{textSetting}</p>
            <InputCustom
              typeInput='checkbox'
              nameInput={nameInput}
              handle={handleCheckStatus}
              idInput={idInput}
              status={status}
            />
          <label htmlFor={idInput}></label>
        </Div>   
  )
}

export default SettingCheck

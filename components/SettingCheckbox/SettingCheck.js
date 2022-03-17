import React from 'react'
import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider';
import InputCustom from '../Input/InputCustom';
import settingCheckbox from '../../public/styled/components/styleCheckbox-setting'


const SettingCheck = ({textSetting, nameInput, idInput}) => {
  const {  handleChangeState_Fn, question } = contextDiagnostic();

  const handleCheckStatus = (e) => {
    const {name , checked} = e.target;
    console.log({name , checked});
    handleChangeState_Fn(name , checked , 'question')
  }
 
  return (
    <>
      <div className='setting-multiple mt-10'>
        <p>{textSetting}</p>
          <InputCustom
            typeInput='checkbox'
            nameInput={nameInput}
            classCustom='check-custom slider-check'
            handle={handleCheckStatus}
            idInput={idInput}
          />
        <label for={idInput}></label>
      </div>
      
      <style jsx>
      {settingCheckbox}
      </style>
    </>
  )
}

export default SettingCheck

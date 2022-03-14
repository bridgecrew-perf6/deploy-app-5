import React from 'react'
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import InputCustom from '../typeQuestion/InputCustom';
import settingCheckbox from '../../../../../public/styled/components/styleCheckbox-setting'

const SettingMultiple = () => {

  const {  handleChangeState_Fn, question } = contextDiagnostic();

  const handleCheckStatus = (e) => {
    const {name , checked} = e.target;
    handleChangeState_Fn(name , checked , 'question')
  }
 
  return (
    <>
      <div className='setting-multiple mt-10'>
        <p>Multiple</p>
        <InputCustom
          typeInput='checkbox'
          nameInput='multiple'
          classCustom='check-custom'
          handle={handleCheckStatus}
          valueInput={question.require}
      />
      </div>
      <style jsx>
      {settingCheckbox}
      </style>
    </>
  )
}

export default SettingMultiple
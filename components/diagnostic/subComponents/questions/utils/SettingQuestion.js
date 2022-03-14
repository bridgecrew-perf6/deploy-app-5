import { Card } from '@shopify/polaris'
import React from 'react'
import InputCustom from '../typeQuestion/InputCustom'
import settingCheckbox from '../../../../../public/styled/components/styleCheckbox-setting';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider';

const SettingQuestion = () => {

  const {  handleChangeState_Fn, question, selectSelected } = contextDiagnostic();

  const selectMultiple = selectSelected.includes('Multiple');

  const handleCheckStatus = (e) => {
    const {name , checked} = e.target;
    handleChangeState_Fn(name , checked , 'question')
  }

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    handleChangeState_Fn(name , value , 'question')
  }
  
  console.log(question);
  return (

    <>
    <Card.Section title="Setting">
      <div className='setting-required'>
        <p>Required</p>
        <InputCustom
          typeInput='checkbox'
          nameInput='required'
          classCustom='check-custom'
          handle={handleCheckStatus}
          valueInput={question.require}
      />
      </div>

      {selectMultiple && ( 
        <>
          <div className='setting-recommended'>
          <p>Recommended</p>
          <InputCustom
            typeInput='checkbox'
            nameInput='recommended'
            classCustom='check-custom'
            handle={handleCheckStatus}
            valueInput={question.require}
          />
        </div>

        <div className='setting-score'>
          <p>Score</p>
          <InputCustom
            typeInput='checkbox'
            nameInput='score'
            classCustom='check-custom'
            handle={handleCheckStatus}
            valueInput={question.require}
          />
        </div>
        </>
        
      )}
      <div className='question-primary'>
        <p>class</p>
        <div className='input-question'>
          <InputCustom
            nameInput="className"
            valueInput={question.className}
            handle={handleChangeText}
          />
        </div>
      </div> 
      
    </Card.Section>

    <style jsx>
    {settingCheckbox}
    </style>
  </>
  
  )
}

export default SettingQuestion
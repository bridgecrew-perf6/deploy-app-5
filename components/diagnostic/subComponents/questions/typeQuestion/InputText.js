import { Card } from '@shopify/polaris';
import React from 'react'
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const InputText = () => {

  const {question, handleChangeOption_Fn, typeQuestionSelected} = contextDiagnostic();

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    
    handleChangeOption_Fn(name , value , 'question')
  }

  console.log("aqui", question);
 
  return (
    <>
    {
      question.type.map((elemen, index) => {
        return ( <div key={index}>
                    <p>Placeholder</p>
                      <input 
                        type='text' 
                        onChange={handleChangeText}
                        name={[typeQuestionSelected+index]}
                        value={elemen[typeQuestionSelected+index]}
                      />
                  </div>
                
        )
      })
    } 
    </>
  )
}

export default InputText
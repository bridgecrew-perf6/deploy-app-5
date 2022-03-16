import { Card } from '@shopify/polaris';
import React from 'react'
import styleQuestionTab from '../../../../public/styled/components/styleQuestionTab';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const QuestionTab = () => {

  const {question, keyChoiceTypeSelected} = contextDiagnostic();

  // console.log(question.type);
  return (
    
        <>
          <div className='container-preview-question'>
            <div className='preview-question'>
              <div className='preview-title'>{question.title}</div>
                <div className='options-question-list'>
                    { question.choices.map((element, index) => {
                        return (
                            <div key={index} className="option">
                              <p>{element[keyChoiceTypeSelected]}</p>
                            </div>
                        )
                      })}
                </div>
            </div>
          </div>
            
          <style jsx>
            {styleQuestionTab}
          </style>
        </>
   

  )
}

export default QuestionTab
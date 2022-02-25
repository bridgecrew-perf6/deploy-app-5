import React from 'react'
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const QuestionTab = () => {

  const {question, typeQuestionSelected} = contextDiagnostic();

  // console.log(question.type);
  return (
    <>
    <div className='container-preview-question'>
      <div className='preview-question'>
        <div className='preview-title'>{question.question}</div>
          <div className='options-question-list'>
              { question.type.map((element, index) => {
                  return (
                      <div key={index} className="option">
                        <p>{element[typeQuestionSelected+index]}</p>
                      </div>
                  )
                })}
          </div>
      </div>
    </div>
    
  </>
  )
}

export default QuestionTab
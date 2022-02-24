import React from 'react'
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const QuestionTab = () => {

  const {question, typeQuestionSelected} = contextDiagnostic();

  // console.log(question.type);
  return (
    <>
    <div>{question.question}</div>
    { question.type.map((element, index) => {
      return <p key={index}>{element[typeQuestionSelected+index]}</p>
    })}
  </>
  )
}

export default QuestionTab
import React from 'react'
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const QuestionTab = () => {

  const {question} = contextDiagnostic();

  console.log(question.type);
  return (
    <>
    <div>{question.question}</div>
    { question.type.map((element) => {
      return <p>{element.text}</p>
    })}
  </>
  )
}

export default QuestionTab
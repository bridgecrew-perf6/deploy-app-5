import React from 'react'
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'
import CardPreview from '../CardPreview/CardPreview'
import QuestionDetails from '../QuestionDetails/QuestionDetails'
import QuestionList from '../QuestionList/QuestionList'
import QuestionPreview from '../QuestionPreview/QuestionPreview'

const Questions = ({loadQuestion}) => {

  const { 
    createQuestion,  
  } = contextDiagnostic();

  return (
    <>
        <div className='content_tab--preview'>   
          <CardPreview >                                
              <QuestionPreview/>
          </CardPreview>
        </div>  

        <div className='content_tab--customize'> 
        {!createQuestion
            ? <QuestionList loadQuestion={loadQuestion}/>
            : <QuestionDetails/>}               
          
        </div>
    </>
  )
}

export default Questions
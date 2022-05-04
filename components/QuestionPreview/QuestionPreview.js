import React from 'react'
import { useQuery } from 'react-query';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'
import Img from '../Img/Img';
import Skeleton from '../Skeleton/Skeleton';
import StateEmpty from '../StateEmpty/StateEmpty';
import { ColorBg, Container, Ptext, Question } from './styles';

const QuestionPreview = () => {

  const {
    question, 
    keyChoiceTypeSelected, 
    getQuestionOptions_Fn, 
    idEditingPreview,
    listQuestions,
    createQuestion
  } = contextDiagnostic();

  const typeSelected = question.type; 

  const existQuestions = Object.keys(question).length === 0 ;
  const listCount = Object.keys(listQuestions).length === 0 ;


  /* get question selected server */
  const {
    isLoading,
    isFetching
    } = useQuery(['getquestionoptions', idEditingPreview], () => getQuestionOptions_Fn(idEditingPreview) );

    if( isLoading || isFetching ){
      return(
        <Skeleton lineText={11}/>
      )
    }  
  /* get question selected server */


  return ( 
    existQuestions 
    ? <StateEmpty/> 
    : (<Container >
        <Question option={typeSelected}>
          <h1>{question.title}</h1>
            <div>
            { question.choices.map((element, index) => {
              return (
                <span key={element.id} className="option">
                    { typeSelected === 'image' || typeSelected=== 'color'
                      ? 
                        typeSelected === 'image' 
                          ? <>
                              <Img 
                                urlImg={element[keyChoiceTypeSelected]} 
                                wImg='50px'
                                hImg='50px'
                              /> 
                              <p>{element.label}</p>
                            </>
                          : <>
                            <ColorBg bgColor={element[keyChoiceTypeSelected]}/>
                            <p>{element.label}</p>
                            </>  
                      : 
                        <Ptext 
                          index={index} 
                          option={typeSelected}>
                            {element[keyChoiceTypeSelected]}
                        </Ptext>
                    }
                    
                  </span>
                )
              })}
            </div>
          </Question>
          
        </Container>)           
  )
}

export default QuestionPreview
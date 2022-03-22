import React from 'react'
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'
import Img from '../Img/Img';
import { ColorBg, Container, Ptext, Question } from './styles';

const QuestionTab = () => {

  const {question, keyChoiceTypeSelected} = contextDiagnostic();

  const typeSelected = question.type; 

  return (
    
            <Container >
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
                                  urlImg={element[keyChoiceTypeSelected]} wImg='50px'
                                  hImg='50px'
                                /> <p>{element.label}</p>
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
              
            </Container>
  )
}

export default QuestionTab
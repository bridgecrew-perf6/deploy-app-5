import React from 'react'
import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider'
import Img from '../Img/Img';
import InputCustom from '../Input/InputCustom';
import { Container, Question } from './styles';

const QuestionTab = () => {

  const {question, keyChoiceTypeSelected, selectSelected} = contextDiagnostic();

  const selected = selectSelected.split('_')[1];


  return (
    
            <Container >
              <Question option={selected}>
                <h1>{question.title}</h1>
                <div>
                { question.choices.map((element) => {
                    return (
                      <span key={element.id} className="option">
                        { selected === 'image' || selected=== 'color'
                          ? 
                            selected === 'image' 
                              ? <>
                                <Img urlImg={element[keyChoiceTypeSelected]}/> <p>{element.label}</p>
                                </>
                              : <>
                                <InputCustom typeInput='color' valueInput={element[keyChoiceTypeSelected]}/>
                                <p>{element.label}</p>
                                </>  
                          : 
                            <p>{element[keyChoiceTypeSelected]}</p>
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
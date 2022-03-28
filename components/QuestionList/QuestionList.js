import { 
  Card,
} from '@shopify/polaris';
import { useEffect } from 'react';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import Action from '../ActionText/Action';
import OptionDelete from '../OptionDelete/OptionDelete';
import QuestionItem from '../QuestionItem/QuestionItem';
import { AddSvg } from '../Svgs/SvgFiles';
import {DragDropContext, Droppable, Draggable, resetServerContext} from 'react-beautiful-dnd'

const QuestionList = () => {
  resetServerContext()
/* questionList */
  const { createQuestion , actionCreateQuestion_Fn, listQuestions} = contextDiagnostic();

  
  useEffect(() => {
    actionCreateQuestion_Fn(false);
  }, [])

  const actionEvent = () => {
    actionCreateQuestion_Fn(!createQuestion)
  }

  const deleteStateQuestion_Fn = () => {
    console.log("eliminando...");
  }

    return (
      <Card >
        <Card.Section title="List of questions">
        </Card.Section>
        
        <Card.Section >
          <p>Select or drag a question</p>

          <DragDropContext onDragEnd={(result) =>{
              console.log(result);
            }}>
            <Droppable droppableId='questions'>
              {(droppableProvided) =>(
                <div 
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                >

                  { listQuestions.map((element, index) => (

                    <Draggable key={index+10} draggableId={index+10} index={index}>
                            
                            {(draggableProvided) => (
                            
                            <OptionDelete 
                            {...draggableProvided.draggableProps}
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.dragHandleProps}
                              actionDelete={() => deleteStateQuestion_Fn()}
                              
                            >
                              
                                <QuestionItem 
                                  type={element.type}
                                  
                                >                     
                                  {element.title}
                                </QuestionItem>
                              
                            </OptionDelete>)}
                          
                      </Draggable>
                     
                    
                  ))}
              {droppableProvided.placeholder}  

              </div>)}
              </Droppable>
          </DragDropContext>
        </Card.Section>
         
        <Card.Section >
          <div onClick={actionEvent}>
            <Action
              textDescription='Add a question' 
              eventAction={actionEvent}
              btnSvg={<AddSvg/>}
            />
          </div>
          
        </Card.Section>
      </Card>
    )
  
}

export default QuestionList
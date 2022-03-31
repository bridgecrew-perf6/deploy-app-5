import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import OptionDelete from '../OptionDelete/OptionDelete';
import QuestionItem from '../QuestionItem/QuestionItem';
import MessageConfirm from '../Message/MessageConfirm';

const DragDrod = () => {

  const [deleting, setDeleting] = useState(false)

  const { listQuestions} = contextDiagnostic();

  const reorderQuestions = (list, startIndex, endIndex) => {
    const result =[...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const deleteValidate = () => {
    
    setDeleting(true);
  }

  const deletedConfirmQuestion = () => {
    console.log("eliminando...");
    setDeleting(false);

  }



  return (
<>
    <DragDropContext 
      onDragEnd={({source, destination}) =>{
        if(!destination){
          return;
        }
        if(source.index === destination.index){
          return;
        }
      
        setList(prev => reorderQuestions(prev, source.index, destination.index))
      }}>

        <Droppable 
          droppableId='questions'
        >
          {(droppableProvided) =>(
            <div 
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              { listQuestions.map((element, index) => (

                <Draggable 
                  key={`dragable${index}`} 
                  draggableId={`dragable${index}`} 
                  index={index}
                >
            
                  {(draggableProvided) => (
                      <div
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        ref={draggableProvided.innerRef}
                      >

                          {/* Item question */}
                          <OptionDelete 
                            actionDelete={() => deleteValidate()}
                          >
                        
                            <QuestionItem 
                              type={element.type}
                              id_question={element.id}
                            >                     
                              {element.title}
                            </QuestionItem>
                        
                          </OptionDelete>
                          {/* Item question */}

                      </div>
                  )}
          
                </Draggable>
 

              ))}
              {droppableProvided.placeholder}  

            </div>
          )}
          
          
      </Droppable>
    </DragDropContext>

      { deleting && 
        <MessageConfirm  
          mesagge="Elimnando" 
          actionTitle="Aceptar" 
          actionChange={deletedConfirmQuestion} 
          changeStateDelete={setDeleting} 
        />
      }
</>
  )
}

export default DragDrod
import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import OptionDelete from '../OptionDelete/OptionDelete';
import QuestionItem from '../QuestionItem/QuestionItem';

const DragDrod = () => {

  const { listQuestions} = contextDiagnostic();

  const [list, setList] = useState(listQuestions)
  console.log(list);

  const reorderQuestions = (list, startIndex, endIndex) => {
    const result =[...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const deleteStateQuestion_Fn = () => {
    console.log("eliminando...");
  }


  return (

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
              { list.map((element, index) => (

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
                            actionDelete={() => deleteStateQuestion_Fn()}
                          >
                        
                            <QuestionItem 
                              type={element.type}
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
  )
}

export default DragDrod
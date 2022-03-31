import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import OptionDelete from '../OptionDelete/OptionDelete';
import QuestionItem from '../QuestionItem/QuestionItem';
import MessageConfirm from '../Message/MessageConfirm';
import { useMutation, useQueryClient } from 'react-query';
import Message from '../Message/Message';

const DragDrod = () => {

  const { listQuestions, deteleteQuestion_Fn, listQuestionsCache} = contextDiagnostic();

  const [deleting, setDeleting] = useState({status:false, id:0})

  const reorderQuestions = (list, startIndex, endIndex) => {
    const result =[...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }


  /* Deleted Question  */
  const queryClient = useQueryClient();

  const {mutate, isError, isLoading, isSuccess} = 
    useMutation(deteleteQuestion_Fn,{
      onSuccess: (list) => {
        queryClient.invalidateQueries(["getlistquestion"])
      }
    });

  const deleteValidate = (id_question) => {  
    setDeleting({status:true, id:id_question});
  }

  const deletedConfirmQuestion = () => {
    mutate(deleting.id);
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
                  key={`dragable${element.id}`} 
                  draggableId={`dragable${element.id}`} 
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
                            actionDelete={() => deleteValidate(element.id)}
                            loadingState={isLoading}
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

      {/* Message interactions */}
      { deleting.status && 
        <MessageConfirm  
          mesagge="¿You're sure?" 
          actionTitle="Sure" 
          actionChange={deletedConfirmQuestion} 
          changeStateDelete={setDeleting} 
        />
      }

      {isError && <Message mesagge="Server error" error={true}/>}
      {isSuccess && <Message mesagge="Delete Success"/>}
      {/* Message interactions */}
  </>
  )
}

export default DragDrod
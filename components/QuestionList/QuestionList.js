import { 
  Card,
} from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import Action from '../ActionText/Action';
import OptionDelete from '../OptionDelete/OptionDelete';
import QuestionItem from '../QuestionItem/QuestionItem';
import { AddSvg } from '../Svgs/SvgFiles';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import DragDrod from '../DragDrop/DragDrod';

const QuestionList = () => {
/* questionList */
  const { createQuestion , actionCreateQuestion_Fn} = contextDiagnostic();

  useEffect(() => {
    actionCreateQuestion_Fn(false);

  }, [])

  const actionEvent = () => {
    actionCreateQuestion_Fn(!createQuestion)
  }

    return (
      
      <Card >
        <Card.Section title="List of questions">
        </Card.Section>
        
        <Card.Section >
          <p>Select or drag a question</p>
 
        {/* lisy question dragables */}
          <DragDrod/>
          
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
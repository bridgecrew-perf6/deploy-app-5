import { 
  Card,
} from '@shopify/polaris';
import { useEffect } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import Action from '../../../ActionText/Action';
import QuestionAddNew from './QuestionAddNew';

const QuestionCustomize = () => {
/* questionList */
  const { createQuestion , actionCreateQuestion_Fn} = contextDiagnostic();

  
  useEffect(() => {
    actionCreateQuestion_Fn(false);
  }, [])

  const actionEvent = () => {
    actionCreateQuestion_Fn(!createQuestion)
  }

  if (createQuestion){
    
    return <QuestionAddNew/>
  }else{
    
    return (
      <Card >
        <Card.Section title="List of questions">
        </Card.Section>
        
        <Card.Section >
          <p>List questions</p>
        </Card.Section>
         
        <Card.Section >
          <Action
            textDescription='Add a question' 
            btnText='Add' 
            eventAction={actionEvent}
          />
        </Card.Section>
      </Card>
    )
  }
  
}

export default QuestionCustomize
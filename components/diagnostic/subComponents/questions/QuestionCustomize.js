import { 
  Card,
} from '@shopify/polaris';
import { useEffect } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import QuestionAddNew from './QuestionAddNew';

const QuestionCustomize = () => {

  const { createQuestion , actionCreateQuestion_Fn} = contextDiagnostic();

  
  useEffect(() => {

    actionCreateQuestion_Fn(false);
  }, [])

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
        <Card.Section 
          title="Add questions" 
          actions={
              [
                {content: 'Add',
                 onAction:() => actionCreateQuestion_Fn(!createQuestion)
                }
              ]} >
        </Card.Section>
      </Card>
    )
  }
  
}

export default QuestionCustomize
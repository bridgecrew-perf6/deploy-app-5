import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import RenderTypeQuestion from './RenderTypeQuestion';

import TypeQuestionSelect from './TypeQuestionSelect';
import BtnAddOptions from './utils/BtnAddOptions';
import InputCustom from './typeQuestion/InputCustom';

const QuestionAddNew = () => {

  const { actionCreateQuestion_Fn, handleChangeState_Fn, question } = contextDiagnostic();

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    handleChangeState_Fn(name , value , 'question')
  }

  return (

    <Card >
        <Card.Section title="Add questions" actions={[{content: 'List',onAction:() => actionCreateQuestion_Fn(false)}]} >
        </Card.Section>
        <Card.Section>
        <div className='question-primary'>
          <p>Question</p>
          <div className='input-question'>
            <InputCustom
              nameInput="question"
              valueInput={question.question}
              handle={handleChangeText}
            />
          </div>
        </div>
          
          {/* option type question */}
          <TypeQuestionSelect/>
          <BtnAddOptions/>
          <RenderTypeQuestion/>
        </Card.Section>
    </Card>
  )
}

export default QuestionAddNew
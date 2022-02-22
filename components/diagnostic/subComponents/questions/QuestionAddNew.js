import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import RenderTypeQuestion from './RenderTypeQuestion';

import TypeQuestionSelect from './TypeQuestionSelect';

const QuestionAddNew = () => {

  const { actionCreateQuestion_Fn } = contextDiagnostic();

  return (

    <Card >
        <Card.Section title="Add questions" actions={[{content: 'List',onAction:() => actionCreateQuestion_Fn(false)}]} >
        </Card.Section>
        <Card.Section>
          <p>Question</p>
          <input
            //onChange={handleChangeText}
            type="text"
            autoComplete="off"
            name='heading'
            //value={heading}
          />
          {/* option type question */}
          <TypeQuestionSelect/>
          <RenderTypeQuestion/>
        </Card.Section>
    </Card>
  )
}

export default QuestionAddNew
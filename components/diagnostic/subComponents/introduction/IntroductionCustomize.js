import { 
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
  Subheading,
  TextStyle
} from '@shopify/polaris';
import { useState } from 'react';
import { useCallback } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';

const IntroductionCustomize = () => {
  
  const { 
      test , 
      decreseamFn, 
      introductionObj : {
              heading,
              subheading,
              buttomText,
              classCustom

  }, handleChangeState_Fn } = contextDiagnostic();
  

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    handleChangeState_Fn(name , value, 'introductionObj');
  }

  return (
        
          <Card >
            <Card.Section title="Edit Introduction"></Card.Section>
            <Card.Section>
                  <p>Heading</p>
                    <input
                      onChange={handleChangeText}
                      type="text"
                      autoComplete="off"
                      name='heading'
                      value={heading}
                    />
                  <p>Subheading</p>
                    <textarea
                      onChange={handleChangeText}
                      type="text"
                      autoComplete="off"
                      name='subheading'
                      value={subheading}

                    > </textarea>
                  <p>Button text</p>
                    <input
                      onChange={handleChangeText}
                      type="text"
                      autoComplete="off"
                      name='buttomText'
                      value={buttomText}
                    />

                  <p>Class</p>
                    <input
                      onChange={handleChangeText}
                      type="text"
                      autoComplete="off"
                      name='classCustom'
                      value={classCustom}
                      placeholder="Ex: header, input"

                    />
              <button type="button" onClick={ decreseamFn }>{ test }</button>
            </Card.Section>
          </Card>

  )
}

export default IntroductionCustomize;
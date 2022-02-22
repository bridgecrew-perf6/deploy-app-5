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
import { contextState } from '../../../src/stateGlobal/StateProvider';

const IntroductionCustomize = () => {
  
  const { 
      test , 
      decreseamFn, 
      introductionObj : {
                heading,
                subheading,
                buttomText

  }, handleChangeState_Fn } = contextState();
  

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    handleChangeState_Fn(name , value, 'introductionObj');
  }

  return (
        
          <Card title="Edit Introduction">
            <Card.Section>
              <Form noValidate >
                <FormLayout>
                <p>Heading</p>
                  <input
                    onChange={handleChangeText}
                    label="Heading"
                    type="text"
                    autoComplete="off"
                    name='heading'
                    value={heading}
                  />
                <p>Subheading</p>
                  <input
                    onChange={handleChangeText}
                    label="Heading"
                    type="text"
                    autoComplete="off"
                    name='subheading'
                    value={subheading}

                  />
                <p>Button text</p>
                  <input
                    onChange={handleChangeText}
                    label="Heading"
                    type="text"
                    autoComplete="off"
                    name='buttomText'
                    value={buttomText}

                  />

                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>

              <button type="button" onClick={ decreseamFn }>{ test }</button>
            </Card.Section>
          </Card>

  )
}

export default IntroductionCustomize;
import { 
  Card,

} from '@shopify/polaris';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';

import InputCustom from '../Input/InputCustom';
import InputTextarea from '../Textarea/InputTextarea';
import Button from '../Button/Button';
import { useMutation, useQueryClient } from 'react-query';
import Message from '../Message/Message';

const IntroductionDetails = () => {
  
  const { 
      introductionObj : {
              heading,
              subheading,
              buttonText,
              className
  }, 
  handleChangeState_Fn,
  saveIntroduction_Fn
   } = contextDiagnostic();
  
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    handleChangeState_Fn(name , value, 'introductionObj');
  }


  /* Send Register Update */
  const {mutate, isError, isLoading, isSuccess} = useMutation(saveIntroduction_Fn);

  const actionSaveIntroduction = () => {
    mutate();
  }

  return (

    /* Props Component = <InputCustom/>
      (   typeInput=default text optional, 
          nameInput=name, 
          handle=functionChange, 
          valueInput=value, 
          hideValue=(true o false, optional-> field not need value)) */
        
          <Card >
            <Card.Section title="Edit Introduction">
            </Card.Section>

            <Card.Section>
              <p>Heading</p>
              <InputCustom 
                nameInput="heading" 
                handle={handleChangeText} 
                valueInput={heading}
              />
                
              <p>Subheading</p>
              <InputTextarea 
                nameInput="subheading"
                handle={handleChangeText}
                valueInput={subheading}/>
              
              <p>Button text</p>
              <InputCustom 
                nameInput="buttonText" 
                handle={handleChangeText}
                valueInput={buttonText}/>
                
              <p>Class</p>
              <InputCustom 
                nameInput="className" 
                handle={handleChangeText}
                valueInput={className}/>

              <Button 
                btnText='Save' 
                wBtn='100%' 
                mBtn='10px 0'
                eventAction={actionSaveIntroduction}
                />
               
                {/* Message interactions */}
                {isSuccess && <Message mesagge="Success"/>}
                {isError && <Message mesagge="Server error" error={true}/>}
                {/* Message interactions */}

            </Card.Section>
          </Card>

  )
}

export default IntroductionDetails;
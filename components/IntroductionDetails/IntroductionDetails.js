import { 
  Card,

} from '@shopify/polaris';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';

import InputCustom from '../Input/InputCustom';
import InputTextarea from '../Textarea/InputTextarea';
import Button from '../Button/Button';
const IntroductionCustomize = () => {
  
  const { 
      introductionObj : {
              heading,
              subheading,
              buttomText,
              className

  }, 
  handleChangeState_Fn,
  saveIntroduction_Fn
   } = contextDiagnostic();
  
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    handleChangeState_Fn(name , value, 'introductionObj');
  }

  const actionSaveIntroduction = () => {
    saveIntroduction_Fn();
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
                nameInput="buttomText" 
                handle={handleChangeText}
                valueInput={buttomText}/>
                
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
            </Card.Section>
          </Card>

  )
}

export default IntroductionCustomize;
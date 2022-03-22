import { 
  Card,

} from '@shopify/polaris';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';

import InputCustom from '../Input/InputCustom';
import InputTextarea from '../Textarea/InputTextarea';

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
                nameInput="classCustom" 
                handle={handleChangeText}
                valueInput={classCustom}/>

              <button type="button" onClick={ decreseamFn }>{ test }</button>
            </Card.Section>
          </Card>

  )
}

export default IntroductionCustomize;
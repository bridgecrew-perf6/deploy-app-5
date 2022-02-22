import React from 'react'
import { 
  Card,
  Form,
  FormLayout,
  TextField,
  Button
} from '@shopify/polaris';
import { contextState } from '../../../src/stateGlobal/StateProvider';

const IntroductionTab = () => {

  const {
      test , 
      increseamFn, 
      introductionObj : { 
                      heading, 
                      subheading, 
                      buttomText 
                    } 
      } = contextState();
  
  console.log(heading);
  return (
    <div className='container-introduction'>
        <div className='introduction--title'>
          { heading }
        </div>
        <p className='introduction--descriptions'>
          { subheading }
        </p>
        <Button disabled={true}>{ buttomText }</Button>
        <button type="button" onClick={ increseamFn }>{ test }</button>
    </div>
  )
}

export default IntroductionTab
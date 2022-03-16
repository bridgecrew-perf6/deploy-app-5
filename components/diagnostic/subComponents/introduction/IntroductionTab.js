import React from 'react'
import { 
  Button
} from '@shopify/polaris';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';
import styleIntroductionTab from '../../../../public/styled/components/styleIntroductionTab';

const IntroductionTab = () => {

  const {
      test , 
      increseamFn, 
      introductionObj : { 
                      heading, 
                      subheading, 
                      buttomText 
                    } 
      } = contextDiagnostic();
  return (

        <>
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

          <style jsx>
            {styleIntroductionTab}
          </style>
        </>

  )
}

export default IntroductionTab
import React from 'react'

import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';

import { Div } from './styles';
import { NextSvg } from '../Svgs/SvgFiles';
import  Button  from '../Button/Button';

const IntroductionPreview = () => {

  const {
      introductionObj : { 
                      heading, 
                      subheading, 
                      buttonText 
                    } 
      } = contextDiagnostic();
  
    return (
        <>
          <Div>
            <h1>
              { heading }
            </h1>

            <p className='introduction--descriptions'>
              { subheading }
            </p>
            
            <Button 
              btnText={buttonText}
              btnSvg={<NextSvg/>}
              wBtn='100px'
            />
          </Div>
        </>
  )
}

export default IntroductionPreview
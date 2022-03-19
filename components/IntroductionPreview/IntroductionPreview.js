import React from 'react'

import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider';

import { Div } from './styles';
import { NextSvg } from '../Svgs/SvgFiles';
import  Button  from '../Button/Button';

const IntroductionPreview = () => {

  const {
      introductionObj : { 
                      heading, 
                      subheading, 
                      buttomText 
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
              btnText={buttomText}
              btnSvg={<NextSvg/>}
              wBtn='100px'
            />
          </Div>
        </>

  )
}

export default IntroductionPreview
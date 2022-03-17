import { Heading, Subheading } from '@shopify/polaris'
import React from 'react'
import Button from '../Button/Button'
import {Div} from './styles';


const Action = (
          { title , 
            textDescription, 
            btnText, 
            btnSvg, 
            eventAction, 
            reverse, 
            divMargin}) => {
  return (
    <Div reverse={reverse} divMargin={divMargin}>
      { 
        title ? <Subheading>{ title }</Subheading> : <p>{ textDescription }</p>
      }
      <Button btnText={btnText} btnSvg={btnSvg} eventAction={eventAction} />
    </Div>
  )
}

export default Action
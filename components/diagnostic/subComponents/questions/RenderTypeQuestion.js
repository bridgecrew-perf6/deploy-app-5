import React from 'react'
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

import InputText from './typeQuestion/InputText';
import InputNumber from './typeQuestion/InputNumber';
import InputEmail from './typeQuestion/InputEmail';



const RenderTypeQuestion = () => {

  const { typeQuestionSelected } = contextDiagnostic();

    /*  {label: 'Text', value: 'InputText'},
    {label: 'Number', value: 'InputNumber'},
    {label: 'Email', value: 'InputEmail'},
    {label: 'Multiple Option', value: 'MultipleOptionCheck'},
    {label: 'Image Option', value: 'MultipleOptionImage'},
    {label: 'Color Option', value: 'MultipleOptionColor'},
    {label: 'Text Area', value: 'InputTeaxarea'}, */
 

    if(typeQuestionSelected === 'InputText') return (<InputText/>)
    
    if(typeQuestionSelected === 'InputNumber') return (<InputNumber/>)
    
    if(typeQuestionSelected === 'InputEmail') return (<InputEmail/>)

}

export default RenderTypeQuestion
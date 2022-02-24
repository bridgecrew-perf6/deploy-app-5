import React from 'react'
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

import InputText from './typeQuestion/InputText';
import InputNumber from './typeQuestion/InputNumber';
import InputEmail from './typeQuestion/InputEmail';
import MultipleOptionText from './typeQuestion/MultipleOptionText';
import MultipleOptionImage from './typeQuestion/MultipleOptionImage';
import MultipleOptionColor from './typeQuestion/MultipleOptionColor';
import InputTextarea from './typeQuestion/InputTextarea';




const RenderTypeQuestion = () => {

  const { typeQuestionSelected } = contextDiagnostic();

    /*  {label: 'Text', value: 'InputText'},
    {label: 'Number', value: 'InputNumber'},
    {label: 'Email', value: 'InputEmail'},
    {label: 'Multiple Option', value: 'MultipleOptionText'},
    {label: 'Image Option', value: 'MultipleOptionImage'},
    {label: 'Color Option', value: 'MultipleOptionColor'},
    {label: 'Text Area', value: 'InputTextarea'}, */
 

    if(typeQuestionSelected === 'InputText') 
    return (<InputText/>)
    
    if(typeQuestionSelected === 'InputNumber') 
    return (<InputNumber/>)
    
    if(typeQuestionSelected === 'InputEmail') 
    return (<InputEmail/>)

    if(typeQuestionSelected === 'MultipleOptionText') 
    return (<InputText/>)

    if(typeQuestionSelected === 'MultipleOptionImage') 
    return (<MultipleOptionImage/>)

    if(typeQuestionSelected === 'MultipleOptionColor') 
    return (<MultipleOptionColor/>)

    if(typeQuestionSelected === 'InputTextarea') 
    return (<InputTextarea/>)


}

export default RenderTypeQuestion
import React from 'react'
import { useQuery } from 'react-query';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import { ConfigSvg, MultipleSvg, TextSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const QuestionItem = ({children, type, id_question}) => {

  let text_or_choice = /choice|image|color/.test(type);

  const {  stateEditingOrPreview, changeStateEditing_Fn } = contextDiagnostic();

  const actionSelectedView = (e) => {

    document.querySelectorAll('.active').forEach((e) => {
      e.classList.remove('active');
    });

      if(e.target.classList.contains('text')){
        e.target.parentElement.parentElement.classList.add('active');
        
      }else {
        e.target.classList.add('active');  
      }
  
      stateEditingOrPreview(id_question)

  }

  const actionEditQuestion = (e) => {
    e.stopPropagation();
    changeStateEditing_Fn(id_question); 
  }



  return (
    <Div onClick={actionSelectedView}>
     <div >
      { 
        text_or_choice 
        ? <MultipleSvg/> 
        : <TextSvg/>
      }
      <p className='text'>{children}</p>
     </div>
     <div onClick={actionEditQuestion}>
      <ConfigSvg />
     </div>
    </Div>
  )
}

export default QuestionItem
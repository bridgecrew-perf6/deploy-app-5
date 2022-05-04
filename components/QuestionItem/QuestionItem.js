import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import { ConfigSvg, MultipleSvg, TextSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const QuestionItem = ({children, type, id_question}) => {

  useEffect(() => {
    markQuestionInit();
  }, []);

  let text_or_choice = /choice|image|color/.test(type);

  const {  stateViewPreview_Fn, changeStateEditing_Fn, question } = contextDiagnostic();

  console.log("question", question);
  const actionSelectedView = (e) => {
    
    let idQuestion;
    
    resetQuestionMark();

      if(e.target.classList.contains('text')){
        const element = e.target.parentElement.parentElement;
        element.classList.add('active');
        idQuestion = element.dataset.id;
      }else {
        e.target.classList.add('active');
        idQuestion = e.target.dataset.id;
      }
  
      stateViewPreview_Fn(idQuestion)

  }

  const resetQuestionMark = () => {
    document.querySelectorAll('.active').forEach((e) => {
      e.classList.remove('active');
    });
  }

  const actionEditQuestion = (e) => {
    e.stopPropagation();
    changeStateEditing_Fn(id_question); 
  }

  const markQuestionInit = () => {
    const listElementFirst = document.querySelectorAll('.list-item')[0];
    listElementFirst.classList.add('active');
    stateViewPreview_Fn(listElementFirst.dataset.id);
  }

  


  return (
    <Div className='list-item' data-id={id_question} onClick={actionSelectedView}>
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
import React from 'react'
import { useQuery } from 'react-query';
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import { ConfigSvg, MultipleSvg, TextSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const QuestionItem = ({children, type, id_question}) => {

  let text_or_choice = /choice|image|color/.test(type);

  const { getQuestionOptions_Fn, listQuestions, question } = contextDiagnostic();

  console.log({listQuestions, question});

  const actionSelectedView = (e) => {

    let getIdQuestion; 

    document.querySelectorAll('.active').forEach((e) => {
      e.classList.remove('active');
    });

      if(e.target.classList.contains('text')){
        e.target.parentElement.parentElement.classList.add('active');
        getIdQuestion = e.target.parentElement.parentElement.dataset.id;
    
      }else {
        e.target.classList.add('active');
        getIdQuestion = e.target.dataset.id;
      }
      

      console.log(getIdQuestion);
      getQuestionOptions_Fn(parseInt(getIdQuestion))

     /*  const {
        isLoading, 
        isFetching, 
        isError
        } = useQuery(['getquestionoptions', getIdQuestion], () => getQuestionOptions_Fn(getIdQuestion) ); */
  }

  const actionEditQuestion = (e) => {
    e.stopPropagation();
    console.log("Editar question");
  }



  return (
    <Div onClick={actionSelectedView} data-id={id_question}>
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
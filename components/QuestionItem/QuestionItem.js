import React from 'react'
import { ConfigSvg, MultipleSvg, TextSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const QuestionItem = ({children, type}) => {

  let text_or_choice = /choice|image|color/.test(type);

  const actionSelectedView = (e) => {

    document.querySelectorAll('.active').forEach((e) => {
      e.classList.remove('active');
    });
      if(e.target.classList.contains('text')){
        e.target.parentElement.parentElement.classList.add('active');
      }
      e.target.classList.add('active');
  }

  const actionEditQuestion = (e) => {
    e.stopPropagation();
    console.log("Editar question");
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
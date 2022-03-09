import React from 'react'
import styleRenderTypeQuestion from '../../../../public/styled/components/styleRenderTypeQuestion';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

import InputCustom from './typeQuestion/InputCustom';
import InputTextarea from './typeQuestion/InputTextarea';


const RenderTypeQuestion = () => {

  const {
    question: {type}, 
    question,
    handleChangeStateSecondKey_Fn, 
    typeQuestionSelected
  } = contextDiagnostic();


  const handleChangeText = (e) => {
    const {name , value} = e.target;
    console.log(e.target.type);
    let id = e.target.parentElement.dataset.id; 
    console.log(id);
    /* params : (nameInput, valueInput, objecState, subObjectState  */
    handleChangeStateSecondKey_Fn(name , value , id, 'question', 'type')
  }

  const typeField = typeQuestionSelected.split('_');


  
    if(typeQuestionSelected === 'Input_text' || 
       typeQuestionSelected === 'Input_number' || 
       typeQuestionSelected === 'Input_email') 
        return (
          type.map((elemen, index) => 
            (      
              <div key={index} className="input-text" data-id={index}>
                <p>Placeholders</p>
                <InputCustom  
                  typeInput={typeField[1]} 
                  nameInput={[typeQuestionSelected+index]}
                  handle={handleChangeText}
                  valueInput={elemen[typeQuestionSelected+index]}
                  
                />
              </div>
               
            )    
          )
        )
    
    if(typeQuestionSelected === 'Multiple_text') 
      return (
        type.map((elemen, index) => 
          (      
            <>
              <div key={index} className="input-multiple-text" data-id={index}>
                <InputCustom  
                  typeInput={typeField[1]} 
                  nameInput={[typeQuestionSelected+index]}
                  handle={handleChangeText}
                  valueInput={elemen[typeQuestionSelected+index]}
                />
              </div>
            </>   
          )    
        )
      )
    
    if(typeQuestionSelected === 'Multiple_file') 
      return (
        type.map((elemen, index) => 
          (      
            <div key={index} className='input-images' data-id={index}>
              <InputCustom  
                typeInput={typeField[1]} 
                nameInput={[typeQuestionSelected+index]}
                handle={handleChangeText}
                valueInput={elemen[typeQuestionSelected+index]}
                hideValue={true}
              />
            </div>  
          )    
        )
      )

    if(typeQuestionSelected === 'Multiple_color') 
      return (
        
        type.map((elemen, index) => 
          (
            <>      
            <div key={index} className='input-colors' data-id={index}>
              <InputCustom  
                typeInput={typeField[1]} 
                nameInput={[typeQuestionSelected+index]}
                handle={handleChangeText}
                valueInput={elemen[typeQuestionSelected+index]}
              /> <p>{elemen[typeQuestionSelected+index]}</p>
            </div>
            <style jsx>
            {styleRenderTypeQuestion}
            </style>
            </>   
          )    
        )

        
      
      )

    if(typeQuestionSelected === 'Input_textarea') 
    return (
      type.map((elemen, index) => 
        ( 
          <div key={index} className='input-textarea' data-id={index}>
            <InputTextarea 
              typeInput={typeField[1]} 
              nameInput={[typeQuestionSelected+index]}
              handle={handleChangeText}
              valueInput={elemen[typeQuestionSelected+index]}
            />
          </div>
        )
      )
    )
    
 

}

export default RenderTypeQuestion
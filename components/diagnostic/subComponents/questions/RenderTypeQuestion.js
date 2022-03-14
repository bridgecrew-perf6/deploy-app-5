import React from 'react'
import styleRenderTypeQuestion from '../../../../public/styled/components/styleRenderTypeQuestion';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

import InputCustom from './typeQuestion/InputCustom';
import InputTextarea from './typeQuestion/InputTextarea';


const RenderTypeQuestion = () => {

  const {
    question: {choices}, 
    question,
    handleChangeStateSecondKey_Fn, 
    selectSelected,
    keyChoiceTypeSelected
  } = contextDiagnostic();

  const typeField = selectSelected.split('_');

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    let id = e.target.parentElement.dataset.id; 
    /* params : (nameInput, valueInput, objecState, subObjectState  */
    handleChangeStateSecondKey_Fn(name , value , id, 'question', 'type')
  }



  
    if(selectSelected === 'Input_text' || 
       selectSelected === 'Input_number' || 
       selectSelected === 'Input_email') 
        return (
          choices.map((elemen, index) => 
            (      
              <div key={index} className="input-text" data-id={index}>
                <p>Placeholders</p>
                <InputCustom  
                  typeInput={typeField[1]} 
                  nameInput="placeholder"
                  handle={handleChangeText}
                  valueInput={elemen.placeholder}
                  
                />
              </div>
               
            )    
          )
        )
    
    if(selectSelected === 'Multiple_choice') 
      return (
        choices.map((elemen, index) => 
          (      
           
              <div key={index} className="input-multiple-text" data-id={index}>
                <InputCustom  
                  typeInput="text"
                  nameInput="placeholder"
                  handle={handleChangeText}
                  valueInput={elemen.placeholder}
                />
              </div>
              
          )    
        )
      )
    
    if(selectSelected === 'Multiple_image') 
      return (
        choices.map((elemen, index) => 
          (      
            <div key={index} className='input-images' data-id={index}>
              <InputCustom  
                typeInput="file"
                nameInput={typeField[1]}
                handle={handleChangeText}
                valueInput={elemen.image}
                hideValue={true}
              />
            </div>  
          )    
        )
      )

    if(selectSelected === 'Multiple_color') 
      return (
        
        choices.map((elemen, index) => 
          (
            <div key={index}>      
            <div  className='input-colors' data-id={index}>
              <InputCustom  
                typeInput={typeField[1]} 
                nameInput={typeField[1]}
                handle={handleChangeText}
                valueInput={elemen.color}
              /> <p>{elemen.color}</p>
            </div>
            <style jsx>
            {styleRenderTypeQuestion}
            </style>
            </div>   
          )    
        )

        
      
      )

    if(selectSelected === 'Input_textarea') 
    return (
      choices.map((elemen, index) => 
        ( 
          <div key={index} className='input-textarea' data-id={index}>
            <InputTextarea 
              typeInput={typeField[1]} 
              nameInput="placeholder"
              handle={handleChangeText}
              valueInput={elemen[selectSelected]}
            />
          </div>
        )
      )
    )
    
 

}

export default RenderTypeQuestion
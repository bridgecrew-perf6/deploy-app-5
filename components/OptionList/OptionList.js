import React from 'react'
import styleRenderTypeQuestion from '../../public/styled/components/styleRenderTypeQuestion';
import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider'

import InputCustom from '../Input/InputCustom';
import OptionDelete from '../OptionDelete/OptionDelete';
import OptionItem from '../OptionItem/OptionItem';
import InputTextarea from '../Textarea/InputTextarea';


const OptionList = () => {

  const {
    question: {choices}, 
    question,
    handleChangeStateSecondKey_Fn, 
    selectSelected
  } = contextDiagnostic();

  console.log(question);


  const typeField = selectSelected.split('_');

  const handleChangeText = (e) => {
    const {name , value, type} = e.target;
  
    if(type === 'file'){
      value = URL.createObjectURL(e.target.files[0]);
    }
    
    let id = e.target.dataset.id; 
 
    /* params : (nameInput, valueInput, objecState, subObjectState  */
    handleChangeStateSecondKey_Fn(name , value , id, 'question', 'type')
  }



  
    if(selectSelected === 'Input_text' || 
       selectSelected === 'Input_number' || 
       selectSelected === 'Input_email') 
        return (
          choices.map((elemen, index) => 
            ( 
              <div key={index}>                
                    <InputCustom      
                      dataId={index}
                      labelText='Placeholders'  
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
            <div key={index}>
              <OptionDelete>                   
                <InputCustom      
                  dataId={index} 
                  typeInput="text"
                  nameInput="placeholder"
                  handle={handleChangeText}
                  valueInput={elemen.placeholder}
                />
              </OptionDelete> 
            </div>     
          )    
        )
      )
    
    if(selectSelected === 'Multiple_image') 
      return (
        choices.map((elemen, index) => 
          (      
            <div key={index}>
              <OptionDelete>
                <OptionItem urlImg={elemen.image}>                     
                    <InputCustom 
                      labelText='Upload'
                      dataId={index} 
                      typeInput="file"
                      nameInput={typeField[1]}
                      handle={handleChangeText}
                      valueInput={elemen.image}
                      hideValue={true}
                  />
                </OptionItem>  
              </OptionDelete> 
            </div>  
          )    
        )
      )

    if(selectSelected === 'Multiple_color') 
      return (
        
        choices.map((elemen, index) => 
          (
             
            <div key={index} className='input-colors' >
              <InputCustom  
                dataId={index}
                typeInput={typeField[1]} 
                nameInput={typeField[1]}
                handle={handleChangeText}
                valueInput={elemen.color}
              /> <p>{elemen.color}</p>
            
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
          <div key={index} className='input-textarea' >
            <InputTextarea
              dataId={index} 
              nameInput="placeholder"
              handle={handleChangeText}
              valueInput={elemen.placeholder}
            />
          </div>
        )
      )
    )
    
 

}

export default OptionList
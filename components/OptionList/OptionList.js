import React from 'react'
import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider'

import InputCustom from '../Input/InputCustom';
import OptionDelete from '../OptionDelete/OptionDelete';
import OptionItem from '../OptionItem/OptionItem';
import { UploadSvg } from '../Svgs/SvgFiles';
import InputTextarea from '../Textarea/InputTextarea';


const OptionList = () => {

  const {
    question: {choices, type},
    question, 
    selectSelected,
    handleChangeStateSecondKey_Fn, 
    changeStateLabelEditable_Fn,
    deleteStateOption_Fn
  } = contextDiagnostic();


  const typeField = type;

  const handleChangeText = (e) => {
    let {name , value, type} = e.target;
   
    if(type === 'file'){

      value = URL.createObjectURL(e.target.files[0]);

    }  

    let id = e.target.dataset.id; 
    /* params : (nameInput, valueInput, objecState, subObjectState  */
    handleChangeStateSecondKey_Fn(name , value , id,'question', 'type')
  }

  const handleTagEditable = (e) => {
    const {textContent} = e.target;

    let id = e.target.dataset.id; 
    let name='label';

    changeStateLabelEditable_Fn(name, textContent, id );
  }

  console.log(selectSelected);
  console.log(question);

  
    if(selectSelected === 'text' || 
       selectSelected === 'number' || 
       selectSelected === 'email') 
        return (
          choices.map((element) => 
            ( 
              <div key={element.id}>                
                    <InputCustom      
                      dataId={element.id}
                      labelText='Placeholders'  
                      typeInput={typeField} 
                      nameInput="placeholder"
                      handle={handleChangeText}
                      valueInput={element.placeholder}            
                    />
                               
              </div>  
            )    
              
              
          )
        )
    
    if(selectSelected === 'choice') 
      return (
        choices.map((element) => 
          (      
            <div key={element.id}>
              <OptionDelete actionDelete={() => deleteStateOption_Fn(element.id)}>                   
                <InputCustom      
                  dataId={element.id} 
                  typeInput="text"
                  nameInput="placeholder"
                  handle={handleChangeText}
                  valueInput={element.placeholder}
                  wInput='85%'
                />
              </OptionDelete> 
            </div>     
          )    
        )
      )
    
    if(selectSelected === 'image') 
      return (
        choices.map((element) => 
          (      
            <div key={element.id}>
              <OptionDelete actionDelete={() => deleteStateOption_Fn(element.id)}>
                <OptionItem 
                  urlImg={element.image} 
                  iconSvg={<UploadSvg/>}
                  dataId={element.id} 
                  handleTagEditable={handleTagEditable}
                  textLabel={element.label} 
                >                     
                    <InputCustom 
                      dataId={element.id} 
                      typeInput="file"
                      nameInput={typeField}
                      handle={handleChangeText}
                      valueInput={element.image}
                      hideValue={true}            
                  />
                </OptionItem>  
              </OptionDelete> 
            </div>  
          )    
        )
      )

    if(selectSelected === 'color') 
      return (
        
        choices.map((element) => 
          (
             
            <div key={element.id}  >
            <OptionDelete actionDelete={() => deleteStateOption_Fn(element.id)}>
              <OptionItem 
                justifyC='flex-start' 
                dataId={element.id} 
                handleTagEditable={handleTagEditable}
                textLabel={element.label} 
              >  
                <InputCustom  
                  dataId={element.id}
                  typeInput={typeField} 
                  nameInput={typeField}
                  handle={handleChangeText}
                  valueInput={element.color}
                /> 
              </OptionItem>
            </OptionDelete>
         </div>
          )    
        )
      )

    if(selectSelected === 'textarea') 
    return (
      choices.map((element) => 
        ( 
          <div key={element.id} className='input-textarea' >
            <InputTextarea
              dataId={element.id} 
              nameInput="placeholder"
              handle={handleChangeText}
              valueInput={element.placeholder}
            />
          </div>
        )
      )
    )
    
 

}

export default OptionList
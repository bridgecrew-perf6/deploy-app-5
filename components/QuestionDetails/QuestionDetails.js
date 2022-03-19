import { 
  Card
} from '@shopify/polaris';

import { contextDiagnostic } from '../../src/stateGlobal/diagnostic/DiagnosticProvider';
import OptionList from '../OptionList/OptionList';

import SelectList from '../SelectList/SelectList';
import InputCustom from '../Input/InputCustom';
import Action from '../ActionText/Action';
import { AddSvg, PrevSvg } from '../Svgs/SvgFiles';
import SettingCheck from '../SettingCheckbox/SettingCheck';
import selectProps from '../SelectList/data';
import { useCallback } from 'react';

const QuestionDetails = () => {
/* questionDetails */
  const { 
      actionCreateQuestion_Fn, 
      handleChangeState_Fn, 
      question, 
      selectSelected,
      addOptionQuestion_Fn,
      changeTypeQuestion_Fn
    
    } = contextDiagnostic();

      
    

  const selectMultiple = selectSelected.includes('Multiple');

  const handleChangeText = (e) => {
    const {name , value} = e.target;
    handleChangeState_Fn(name , value , 'question')
  }

  const actionChangeList = () => {
    actionCreateQuestion_Fn(false);
  }

  const actionAddOption = () => {
    addOptionQuestion_Fn();
  }

  const handleSelectChange = useCallback((value) => changeTypeQuestion_Fn(value), []);


  const handleCheckStatus = (e) => {
    const {name , checked} = e.target;
    handleChangeState_Fn(name , checked , 'question')
  }

  const {optionsQuestion} = selectProps();
  return (

    <Card >
        <Card.Section>
          <Action 
            title='Add a question'  
            eventAction={actionChangeList}
            reverse="reverse"
            btnSvg={<PrevSvg/>}
          />
        </Card.Section>

        <Card.Section>
          <InputCustom
            labelText='Question'
            nameInput="title"
            valueInput={question.title}
            handle={handleChangeText}
          />
     
          {/* option type question */}
          <SelectList 
            optionsQuestion={optionsQuestion}
            selectSelected={selectSelected}
            handleSelectChange={handleSelectChange} 
          /> {/* select option type question */}
          { 
          //* setting selected multiple options */ 
            selectMultiple
              && <SettingCheck 
                    textSetting='Multiple'
                    nameInput='multiple' 
                    idInput='multiple'
                    handleCheckStatus={handleCheckStatus}
                  /> 
          }     
        </Card.Section>
                   
        <Card.Section>
          {
            selectMultiple
              &&  
              <Action 
                title='Options' 
                btnText='Add' 
                btnSvg={<AddSvg/>} 
                eventAction={actionAddOption}
                divMargin='0 0 19px 0'
              />      // add more option *
          } 
               
           {/* load type question - option [text, choice, image, etc] */}
           <OptionList/>
        </Card.Section>

          {/* setting question [require, class] */}
        <Card.Section>
           <SettingCheck 
              textSetting='Required'
              nameInput='required' 
              idInput='required'
              handleCheckStatus={handleCheckStatus}
            />

            {
              selectMultiple
                &&
                <>
                  <SettingCheck 
                    textSetting='Recommended'
                    nameInput='recommended' 
                    idInput='recommended'
                    handleCheckStatus={handleCheckStatus}
                  />
                  <SettingCheck 
                    textSetting='Score'
                    nameInput='score' 
                    idInput='score'
                    handleCheckStatus={handleCheckStatus}
                  />   
                </>
                
            }

              <InputCustom
                labelText='ClassName'
                nameInput="className"
                valueInput={question.className}
                handle={handleChangeText}
              />
        </Card.Section> 
        
    </Card>
  )
}

export default QuestionDetails
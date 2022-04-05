import { 
  Card
} from '@shopify/polaris';

import { contextDiagnostic } from '../../states/diagnostic/DiagnosticProvider';
import OptionList from '../OptionList/OptionList';

import SelectList from '../SelectList/SelectList';
import InputCustom from '../Input/InputCustom';
import Action from '../ActionText/Action';
import { AddSvg, PrevSvg } from '../Svgs/SvgFiles';
import SettingCheck from '../SettingCheckbox/SettingCheck';
import selectProps from '../SelectList/data';
import { useCallback } from 'react';
import Button from '../Button/Button';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Message from '../Message/Message';
import Skeleton from '../Skeleton/Skeleton';
const QuestionDetails = () => {
/* questionDetails */
  const { 
      actionCreateQuestion_Fn, 
      handleChangeState_Fn, 
      question, 
      selectSelected,
      addOptionQuestion_Fn,
      changeTypeQuestion_Fn,
      saveQuestion_Fn,
      idEditingPreview,
      editingQuestion,
   
    } = contextDiagnostic();

  const {optionsQuestion} = selectProps();
  const optionMultiple = /choice|image|color/.test(selectSelected);

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
    console.log({name , checked});


    handleChangeState_Fn(name , checked , 'question')
  }



  /* Send register question update */
  const queryClient = useQueryClient();

  const {mutate, isError, isLoading, isSuccess} = 
    useMutation(saveQuestion_Fn, {
      onSuccess: (list) => {
        queryClient.invalidateQueries(["getlistquestion"]),
        queryClient.invalidateQueries(["getquestionoptions"])
      }
    });

    const actionSaveQuestion = () => {
      mutate();
    }
    /* Send register question update */



    /* Get state query actual*/
    const {
      isLoading: isLoadinEditing
      } = useQuery(['getquestionoptions', idEditingPreview]);

    if(isLoadinEditing){
      return (
        <Card>
          <Skeleton lineText={25}/>
        </Card>
      )
    }
    /* Chage Editin Form */

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
              title="Type question"
              optionsQuestion={optionsQuestion}
              selectSelected={selectSelected}
              handleSelectChange={handleSelectChange} 
            /> {/* select option type question */}
            { 
            //* setting selected multiple options */ 
              optionMultiple
                && <SettingCheck 
                      textSetting='Multiple'
                      nameInput='multiple' 
                      idInput='multiple'
                      valueInput={question.multiple}
                      handleCheckStatus={handleCheckStatus}
                      status={question.multiple} 
                    /> 
            }     
          </Card.Section>
                     
          <Card.Section>
            {
              optionMultiple
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
                status={question.required}
                valueInput={question.required}

              />
  
              {
                optionMultiple
                  &&
                  <>
                    <SettingCheck 
                      textSetting='Recommended'
                      nameInput='recommended' 
                      idInput='recommended'
                      handleCheckStatus={handleCheckStatus}
                      status={question.recommended}
                      valueInput={question.recommended}

                      
                    />
                    <SettingCheck 
                      textSetting='Score'
                      nameInput='score' 
                      idInput='score'
                      handleCheckStatus={handleCheckStatus}
                      status={question.score}
                      valueInput={question.score}

                    />   
                  </>
                  
              }
  
                <InputCustom
                  labelText='ClassName'
                  nameInput="className"
                  valueInput={question.className}
                  handle={handleChangeText}
                  placeh='Class Name'
                />
  
                <Button 
                  btnText={editingQuestion ? 'Update Question':'Save Question'}
                  loadingState={isLoading} 
                  wBtn='100%' 
                  mBtn='10px 0'
                  eventAction={actionSaveQuestion}
                  />
  
                  {isSuccess 
                    && <Message 
                          mesagge={editingQuestion 
                                    ? 'Update success'
                                    : 'Save success'
                                  }
                          />}
                  {isError && <Message mesagge="Server error!" error={true}/>}
          </Card.Section> 
      </Card>
    )
  
}

export default QuestionDetails
import {  getKey_Value_ChoiceSelected } from '../../helpers/helpersReducer';
import { uid } from 'uid';


const diagnosticReducer = (state , action) => {


  const STATES_CONDITION = {
    'HANDLE_TEXT_CHANGE'            : () => handleTextchange(action.payload),
    'CHANGE_SELECTED_TAB'           : () => handleSelectTab(action.payload),
    'CHANGE_STATUS_CREATE_QUESTION' : () => changeStatusCreateList(action.payload),
    'CHANGE_TYPE_QUESTION_SELECTED' : () => changeTypeQuestionSelected(action.payload),
    'ADD_OPTION_QUESTION'           : () => addOptionQuestion(),
    'RESTAR_STATE_TYPE_QUESTION'    : () => restartTypeQuestion(),
    'CHANGE_OPTION_QUESTION_LIST'   : () => changeStateChoiceQuestion(action.payload),
    'CHANGE_STATE_LABEL_EDITABLE'   : () => changeStateLabelEditable(action.payload),
    'DELETE_STATE_OPTION_QUESTION'  : () => deleteChoiceQuestion(action.payload),
  }
  const STATE_DEFAULT = state;
  
  const handleTextchange = (payload) => {
    const { name , value, stateCurrent } = payload;
    return {
      ...state,
      [stateCurrent] : {...state[stateCurrent], [name] : value }
    }
  }

  const handleSelectTab = (payload) => {
    return {
      ...state,
      selectedTab: payload
    }
  }

  const changeStatusCreateList = (payload) => {
    return {
      ...state,
      createQuestion: payload
    }
  }

  const changeTypeQuestionSelected = (payload) => {
    const {keyChoice} = getKey_Value_ChoiceSelected(payload);
    const typeSelected = payload.split('_')[1];

    return {
      ...state,
      selectSelected: payload,
      keyChoiceTypeSelected: keyChoice,
      question: {...state.question, type : typeSelected}
    }
  }

  const addOptionQuestion = () => {
    const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);
     
      return {
        ...state,
        question: {...state.question , choices: [ ...state.question.choices,{id: uid(), label: valueChoice, [keyChoice]: valueChoice}]}
      }
  }

  const restartTypeQuestion = () => {
     /* restar state question.type onchange type selected */
      /* state update -> 
        question {
          type: [reinitialize option added]
      } */
      const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);

      return {
        ...state,
        question: {...state.question , choices: [{id: uid(), label: valueChoice,[keyChoice]: valueChoice }]}
      }
  }

  const changeStateChoiceQuestion = (payload) => {
    /* update option added for question  */
        /* state update -> 
          question {
            type: [update]
        } */
        const { name , value, id } = payload;
        return {
          ...state,
          question: {...state.question ,  choices : state.question.choices.map( elemen => elemen.id ===  id  ?  {...elemen , label: value, [name] : value} : elemen)}
        }
  }

  const changeStateLabelEditable = (payload) => {
    const {name, textContext, id} = payload;
    
        return {
          ...state,
          question: {...state.question ,  choices : state.question.choices.map( elemen => elemen.id ===  id ?  {...elemen , [name]: textContext} : elemen)}
        }
  }

  const deleteChoiceQuestion = (payload) => {
    return {
      ...state,
      question: {...state.question, choices: state.question.choices.filter(e => e.id !== payload)}
    }
  }


  /* call condition */
  const stateReturn = STATES_CONDITION[action.type] 
    ? STATES_CONDITION[action.type]() 
    : STATE_DEFAULT;


  return stateReturn;

}

export default diagnosticReducer



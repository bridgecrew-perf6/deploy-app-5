import React from 'react'
import { getKey_Value_ChoiceSelected } from '../../helpers/helpersReducer';

const diagnosticReducer = (state , action) => {
  
  switch (action.type) {

    case 'EVENT_INCRESEAM':
      return {
        ...state,
        test: state.test + 1
      }
    
    case 'EVENT_DECRESEAM':
      return {
        ...state,
        test: state.test - 1
      }
    
    case 'HANDLE_TEXT_CHANGE':
      const { name , value, stateCurrent } = action.payload;
      return {
        ...state,
        [stateCurrent] : {...state[stateCurrent], [name] : value }
      }

    case 'CHANGE_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload
      }

    case 'CHANGE_STATUS_CREATE_QUESTION':
      return {
        ...state,
        createQuestion: action.payload
      }

    case 'CHANGE_TYPE_QUESTION_SELECTED': {
      
      const {keyChoice} = getKey_Value_ChoiceSelected(action.payload);

      return {
        ...state,
        selectSelected: action.payload,
        keyChoiceTypeSelected: keyChoice
      }
    }
      

    case 'ADD_OPTION_QUESTION': {
      const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);
      const sizeOption = state.question.choices.length;
      return {
        ...state,
        question: {...state.question , choices: [ ...state.question.choices ,{id: sizeOption , [keyChoice]: valueChoice}]}
      }
    }

    case 'RESTAR_STATE_TYPE_QUESTION': {
      /* restar state question.type onchange type selected */
      /* state update -> 
        question {
          type: [reinitialize option added]
      } */
      const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected(state.selectSelected);

      return {
        ...state,
        question: {...state.question , choices: [{id: 0, [keyChoice]: valueChoice }]}
      }
    }

      case 'CHANGE_OPTION_QUESTION_LIST': {
        /* update option added for question  */
        /* state update -> 
          question {
            type: [update]
        } */

        const { name , value, id } = action.payload;
        return {
          ...state,
          question: {...state.question ,  choices : state.question.choices.map( elemen => elemen.id ===  parseInt(id) ?  {...elemen , [name] : value} : elemen)}
        }
      }
      
      default:
        return state;
  }
}

export default diagnosticReducer



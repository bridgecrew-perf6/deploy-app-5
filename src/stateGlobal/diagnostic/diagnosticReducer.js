import React from 'react'

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

    case 'CHANGE_TYPE_QUESTION_SELECTED':
      return {
        ...state,
        typeQuestionSelected: action.payload
      }

    case 'ADD_OPTION_QUESTION':
      return {
        ...state,
        question: {...state.question , type: [ ...state.question.type ,action.payload]}
      }

    case 'RESTAR_STATE_TYPE_QUESTION':
      return {
        ...state,
        question: {...state.question , type: [{[state.typeQuestionSelected+'0']: 'option1'}]}
      }

      case 'CHANGE_OPTION_QUESTION_LIST': {

        const { name , value } = action.payload;

        const result = state.question.type.map( elemen => elemen[name] ? elemen[name]= {[name] : value} : elemen)
        
        console.log("estado", state.question.type);
        console.log("estado", result);

        return {
          ...state,
          question: {...state.question ,  type : result}
        }
      }
      
       

      default:
        return state;
  }
}

export default diagnosticReducer


/* 
const question = [
  {MultipleOptionText0: 'valueawdawdawd'},
  {MultipleOptionText1: 'value1awdawd'},
  {MultipleOptionText2: 'estes'},
  {MultipleOptionText3: 'value1dawddddaw'}];


  const result = question.map( elemen => elemen['MultipleOptionText2'] ? elemen['MultipleOptionText2']= {'MultipleOptionText2' : "holaaa"} : elemen)


  console.log(result);
 */
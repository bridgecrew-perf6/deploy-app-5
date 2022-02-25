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

    case 'RESTAR_STATE_TYPE_QUESTION': {
      /* restar state question.type onchange type selected */
      /* state update -> 
        question {
          type: [reinitialize option added]
      } */
      let optionDefault = 'Option';
      if(state.typeQuestionSelected === "Multiple_file"){
        optionDefault = "https://image.shutterstock.com/image-vector/click-icon-vector-select-press-260nw-1151377079.jpg";
      }
      if(state.typeQuestionSelected === "Multiple_color"){
        optionDefault = "#fff"
      }
      return {
        ...state,
        question: {...state.question , type: [{id: 0, [state.typeQuestionSelected+'0']: optionDefault }]}
      }
    }

      case 'CHANGE_OPTION_QUESTION_LIST': {
        /* update option added for question  */
        /* state update -> 
          question {
            type: [update]
        } */
        console.log(action.payload);
        console.log(state.question );

        const { name , value, id } = action.payload;
        return {
          ...state,
          question: {...state.question ,  type : state.question.type.map( elemen => elemen.id ===  parseInt(id) ?  {...elemen , [name] : value} : elemen)}
        }
      }
      
      default:
        return state;
  }
}

export default diagnosticReducer




/* const question = [
  {id : 1 , MultipleOptionText0: 'valueawdawdawd'},
  {id : 2 ,MultipleOptionText1: 'value1awdawd'},
  {id : 3 ,MultipleOptionText2: ''},
  {id : 4 ,MultipleOptionText3: 'value1dawddddaw'}];


  const result = question.map( elemen => elemen.id === 3 ? {...elemen ,'MultipleOptionText2' : "holaaa"} : elemen)


  console.log(result); */
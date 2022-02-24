import React, { createContext, useContext, useReducer } from 'react'
import diagnosticReducer from './diagnosticReducer';


const stateContext = createContext();

export const contextDiagnostic = () => {
  const context = useContext(stateContext);
  return context;
}

const DiagnosticProvider = ({ children }) => {
  const initialState = {
    test: 0,
    /* tab introduction */
    introductionObj:{
      heading     : "Welcome to your diagnostic",
      subheading  : "Discovery your hair condition",
      buttomText  : "Start",
      classCustom : "introduction"  
    },

    /* Selected tab */
    selectedTab: 0,
    /* add question */
    createQuestion:false,
    /* type question */
    typeQuestionSelected: "InputText",

    question:{
      question: "Cual es tu nombre",
      type    : [{  InputText0 : "value"}],
    }
  }

  const [state, dispatch] = useReducer(diagnosticReducer, initialState);

  /* TEST  */
  const increseamFn = () => {
    dispatch({
      type : 'EVENT_INCRESEAM'
    })
  }

  const decreseamFn = () => {
    dispatch({
      type : 'EVENT_DECRESEAM'
    })
  }
  /* TEST  */

  /* function dispacher */

  const handleChangeState_Fn = ( name, value, stateCurrent ) => {
    dispatch({
      type: 'HANDLE_TEXT_CHANGE',
      payload: { name , value, stateCurrent }
    })
  }

  const chageSelectedTab_Fn = (tab) => {
    dispatch({
      type: 'CHANGE_SELECTED_TAB',
      payload: tab
    })
  }

  const actionCreateQuestion_Fn = (status) => {
    dispatch({
      type: 'CHANGE_STATUS_CREATE_QUESTION',
      payload: status
    })
  }

  const changeTypeQuestion_Fn = (typeQuestion) => {
    dispatch({
      type: 'CHANGE_TYPE_QUESTION_SELECTED',
      payload: typeQuestion
    })

    restarTypeQuestion();
  }

  const restarTypeQuestion = () => {
    console.log("pasa");
    dispatch({
      type: 'RESTAR_STATE_TYPE_QUESTION'
    })
  }

  const addOptionQuestion_Fn = (option) => {
    dispatch({
      type: 'ADD_OPTION_QUESTION',
      payload: option
    })
  }

  const handleChangeOption_Fn = (name, value, stateCurrent) => {
    dispatch({
      type: 'CHANGE_OPTION_QUESTION_LIST',
      payload: { name, value, stateCurrent }
    })
  }


  return (
    <stateContext.Provider 
    
      value={{
       
        test                : state.test,
        introductionObj     : state.introductionObj,
        selectedTab         : state.selectedTab,
        createQuestion      : state.createQuestion,
        typeQuestionSelected: state.typeQuestionSelected,
        question            : state.question,

        increseamFn,
        decreseamFn,
        handleChangeState_Fn,
        chageSelectedTab_Fn,
        actionCreateQuestion_Fn,
        changeTypeQuestion_Fn,
        addOptionQuestion_Fn,
        handleChangeOption_Fn
      }}
    >

      { children }
    </stateContext.Provider>
  )
}

export default DiagnosticProvider;
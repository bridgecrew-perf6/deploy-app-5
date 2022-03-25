import React, { createContext, useContext, useReducer, useEffect } from 'react'
import {tokenSession} from '../../services/init/session';
import diagnosticReducer from './diagnosticReducer';
import {saveIntroduction, getIntroduction} from '../../services/diagnostic/introduction';


const stateContext = createContext();

export const contextDiagnostic = () => {
  const context = useContext(stateContext);
  return context;
}

const DiagnosticProvider = ({ children }) => {

  useEffect(() => {
    console.log("verificando contacto al serve");
    tokenSession();
  }, [])

  const initialState = {

    quizId : 3,
   
    /* tab introduction */
    introductionObj:{
      heading: "Welcome to your diagnostic",
      subheading: "Discovery your hair condition",
      buttonText: "Start",
      className: "introduction"  
    },
  

    /* Selected tab */
    selectedTab: 0,
    /* add question */
    createQuestion:false,
    /* type question */
    selectSelected: "Input_text",
    keyChoiceTypeSelected: "placeholder",

    question:{
      title  : "¿Cual es tu nombre?",
      type:"text",
      className: "",
      required: true,
      recommended: true,
      multiple: false,
      score : true,
      choices   : 
      [{ 
          id: '0',
          label: "",  
          placeholder : "placeholder"
        }],
    }
  }

  const [state, dispatch] = useReducer(diagnosticReducer, initialState);


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

    dispatch({
      type: 'RESTAR_STATE_TYPE_QUESTION'
    })
  }

  const addOptionQuestion_Fn = () => {
    dispatch({
      type: 'ADD_OPTION_QUESTION'
    })
  }

  const handleChangeStateSecondKey_Fn = (name, value, id, stateCurrent, stateSub) => {
    dispatch({
      type: 'CHANGE_OPTION_QUESTION_LIST',
      payload: { name, value, id, stateCurrent, stateSub }
    })
  }

  const changeStateLabelEditable_Fn = (name, textContext, id) => {

    dispatch({
      type: 'CHANGE_STATE_LABEL_EDITABLE',
      payload: {name, textContext, id}
    })

  }

  const deleteStateOption_Fn = (id_delete) => {
    dispatch({
      type: 'DELETE_STATE_OPTION_QUESTION',
      payload: id_delete
    })
  }


  /* request API */
/* Introduction */
  const saveIntroduction_Fn = async () => {
    const rs = await saveIntroduction(state.introductionObj, state.quizId); 
    return rs;
  }

  const getIntroduction_Fn = async () => {
    const rs = await getIntroduction(state.quizId);
    rs.status === 200 ? console.log("succes") : console.log("error")

    dispatch({
      type : 'GET_INTRODUCCION_API',
      payload: rs.data
    })
    return rs;
  }

  /* introduction */


  return (
    <stateContext.Provider 
    
      value={{
       
        introductionObj     : state.introductionObj,
        selectedTab         : state.selectedTab,
        createQuestion      : state.createQuestion,
        selectSelected      : state.selectSelected,
        keyChoiceTypeSelected: state.keyChoiceTypeSelected,
        question            : state.question,

        handleChangeState_Fn,
        chageSelectedTab_Fn,
        actionCreateQuestion_Fn,
        changeTypeQuestion_Fn,
        addOptionQuestion_Fn,
        handleChangeStateSecondKey_Fn,
        changeStateLabelEditable_Fn,
        deleteStateOption_Fn,

        saveIntroduction_Fn,
        getIntroduction_Fn
      }}
    >

      { children }
    </stateContext.Provider>
  )
}

export default DiagnosticProvider;



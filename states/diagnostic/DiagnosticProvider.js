import React, { createContext, useContext, useReducer, useEffect } from 'react'
import {tokenSession} from '../../services/init/session';
import diagnosticReducer from './diagnosticReducer';
import {saveIntroductionServer, getIntroductionServer} from '../../services/diagnostic/introduction';
import { deleteQuestionServer, getQuestionListServer, getQuestionOptionListServer, saveQuestionServer, deleteOptionQuestionServer, saveOrderQuestionServer } from '../../services/diagnostic/question';


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
    editingQuestion: false,
    /* type question */
    selectSelected: "text",
    keyChoiceTypeSelected: "placeholder",

    questionInitials:{
      title  : "¿Write a question?",
      type:"text",
      className: "",
      required: false,
      recommended: true,
      multiple: true,
      score : false,
      choices   : 
      [{ 
          id: 0,
          label: "",  
          placeholder : "placeholder"
        }]
    },

    question: {},
    

    listQuestions:[],
    listQuestionsCache:[],
    idEditingPreview: 0
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

  const handleChangeStateSecondKey_Fn = (name, value, id) => {
    dispatch({
      type: 'CHANGE_OPTION_QUESTION_LIST',
      payload: { name, value, id}
    })
  }

  const changeStateLabelEditable_Fn = (name, textContext, id) => {

    dispatch({
      type: 'CHANGE_STATE_LABEL_EDITABLE',
      payload: {name, textContext, id}
    })
  }

  const deleteStateOption_Fn = async (id_delete) => {

    const rs = await deleteOptionQuestionServer(state.quizId, id_delete)
    dispatch({
      type: 'DELETE_STATE_OPTION_QUESTION',
      payload: id_delete
    })

    return rs;
  }



/* request API */
/* Introduction services */
  const saveIntroduction_Fn = async () => {
    const rs = await saveIntroductionServer(state.introductionObj, state.quizId); 
    return rs;
  }

  const getIntroduction_Fn = async () => {
    const rs = await getIntroductionServer(state.quizId);
    rs.status === 200 ? console.log("succes") : console.log("error")

    dispatch({
      type : 'GET_INTRODUCCION_STATE',
      payload: rs.data
    })
    return rs;
  }
  /* introduction */
  /* Question services*/

  const getListQuestion_Fn = async () => {
    const rs = await getQuestionListServer(state.quizId);
    dispatch({
      type: 'GET_QUESTION_LIST_ALL_STATE',
      payload: rs.data.items
    })
    return rs;
  }



  const saveQuestion_Fn = async () => {
    const rs = await saveQuestionServer(state.question, state.quizId);
 
    dispatch({
      type: 'RESTAT_LIST_CACHE',
    })
    return rs;
  }

  const stateEditingOrPreview = (id_question) => {
    dispatch({
      type: 'CHANGE_STATE_ID_QUESTION_EDIT_PREVIEW',
      payload: id_question
    })
  }

  const getQuestionOptions_Fn = async (id_question_preview) => {

    if(id_question_preview === 0) return;
    
     const questionPreviewSelected = state.listQuestionsCache.filter((e) => e.id === id_question_preview );
     console.log(questionPreviewSelected);
    let questionOptionsUdtateServe;
     if(questionPreviewSelected.length === 0){
       questionOptionsUdtateServe = await getOneQuestionOptions(id_question_preview);
        dispatcherUpdateQuestionSelected(questionOptionsUdtateServe);
        dispatcherUpdateCacheList(questionOptionsUdtateServe);
        
     }else{
        dispatcherUpdateQuestionSelected(questionPreviewSelected[0]);
     }

     return questionOptionsUdtateServe;
  }

  const getOneQuestionOptions = async (id_question) => {
    
    const rs = await getQuestionOptionListServer(state.quizId , id_question);
    return rs;
  }

  const dispatcherUpdateQuestionSelected = (questionUdtate) => {
    dispatch({
      type: 'UPDATE_SATATE_QUESTION_PREVIEW',
      payload: questionUdtate
    });
  }

  const dispatcherUpdateCacheList = (questionUdtate) => {
    dispatch({
      type: 'UPDATE_SATATE_QUESTION_LIST_CACHE',
      payload: questionUdtate
    });
  }

  const deteleteQuestion_Fn = async (id_question) => {

    const rs = await deleteQuestionServer(state.quizId, id_question);
    dispatch({
      type: 'DELETE_STATE_CACHE_QUESTION',
      payload: id_question,
    })
    return rs;
  }

  const changeStateEditing_Fn = (id_question) => {
    dispatch({
      type: 'CHANGE_STATE_EDITING',
      payload: id_question
    })

  }

  const updatListQuestionDraging_Fn = (listDrag) => {
    dispatch({
      type: 'UPDATING_LIST_DRAGING',
      payload:listDrag
    })
  }

  const saveOrderListQuestion_Fn = async () => {
    const orderIds =  state.listQuestions.map(({ id }) => (id));
    const rs = await saveOrderQuestionServer(state.quizId, orderIds);
    return rs;
  }

  return (
    <stateContext.Provider 
    
      value={{
       
        introductionObj       : state.introductionObj,
        selectedTab           : state.selectedTab,
        createQuestion        : state.createQuestion,
        selectSelected        : state.selectSelected,
        keyChoiceTypeSelected : state.keyChoiceTypeSelected,
        question              : state.question,
        listQuestions         : state.listQuestions,
        listQuestionsCache    : state.listQuestionsCache,
        idEditingPreview      : state.idEditingPreview,
        editingQuestion       : state.editingQuestion,
  
        handleChangeState_Fn,
        chageSelectedTab_Fn,
        actionCreateQuestion_Fn,
        changeTypeQuestion_Fn,
        addOptionQuestion_Fn,
        handleChangeStateSecondKey_Fn,
        changeStateLabelEditable_Fn,
        deleteStateOption_Fn,

        saveIntroduction_Fn,
        getIntroduction_Fn,
        saveQuestion_Fn,
        getListQuestion_Fn,
        getQuestionOptions_Fn,
        stateEditingOrPreview,
        deteleteQuestion_Fn,
        changeStateEditing_Fn,
        updatListQuestionDraging_Fn,
        saveOrderListQuestion_Fn
      }}
    >

      { children }
    </stateContext.Provider>
  )
}

export default DiagnosticProvider;



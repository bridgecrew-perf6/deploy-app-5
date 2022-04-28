import React, { createContext, useContext, useReducer } from 'react'
import { getSectionListServer, saveSectionServer } from '../../services/diagnostic/result';
import resultReducer from './resultReducer';


const stateContext = createContext();

export const contextResult= () => {
  const context = useContext(stateContext);
  return context;
}

const ResultProvider = ({children}) => {

  const initialState = {
    quizId : 3,
    idCurrentSection:0,
    createSection: false,
    typeSectionSelected: 'hero',

    sectionsList: [],
    totalSections:0
  }


  const [state, dispatch] = useReducer(resultReducer, initialState);


  /* Functionls */
  const changeStateCreate_Fn = (isTrue) => {
    dispatch({
      type: 'CHANGE_STATE_CREATE',
      payload: isTrue
    })
  }

  const changeStateList_Fn = (isFalse) => {
    dispatch({
      type: 'CHANGE_STATE_LIST',
      payload: isFalse
    })
  }

  const changeTypeSection_Fn = (typeSection) => {
    dispatch({
      type: 'CHANGE_TYPE_SECTION',
      payload: typeSection
    })
  }

  const changeStateSection_Fn = (name, value, id_section) => {
    
    dispatch({
      type:'CHANGE_STATE_SECTIONS_FORM',
      payload: {name, value, id_section}
    })
  }

  const addOptionSection_Fn = (idCurrentSection) => {
    dispatch({
      type:'ADD_OPTION_SECTION',
      payload: idCurrentSection
    })
  }

  const changeStateOption_Fn = (name, value, id_option, idCurrentSection) => {
    dispatch({
      type: 'CHANGE_STATE_OPTION_SECTION',
      payload: {name, value, id_option, idCurrentSection}
    })
  }



  /* Interactions API */
  const saveSection_Fn = async(section) => {
    const rs = await saveSectionServer( section, state.quizId, state.idCurrentSection);
    console.log("respuesta de save:", rs);
    return rs;
  }

  const getSectionList_Fn =  async () => {

    const rs = await getSectionListServer(state.quizId);
    
    dispatch({
      type: 'LOAD_STATE_LIST_SECTION',
      payload: rs.data
    })

    return rs;
  }

  /* Functionls */


  /* disponibility props */
  return (
    <stateContext.Provider 
      value={{

        createSection : state.createSection,
        typeSectionSelected : state.typeSectionSelected,
        sectionsList : state.sectionsList,
        idCurrentSection : state.idCurrentSection,
        totalSections : state.totalSections,


        changeStateCreate_Fn,
        changeStateList_Fn,
        changeTypeSection_Fn,
        changeStateSection_Fn,
        addOptionSection_Fn,
        changeStateOption_Fn,
        saveSection_Fn,
        getSectionList_Fn

      }}
    >
      {children}
    </stateContext.Provider>
  )
}

export default ResultProvider

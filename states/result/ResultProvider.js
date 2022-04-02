import React, { createContext, useContext, useReducer } from 'react'
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

    sectionsList: []
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


  /* Functionls */


  /* disponibility props */
  return (
    <stateContext.Provider 
      value={{

        createSection : state.createSection,
        typeSectionSelected : state.typeSectionSelected,
        sectionsList : state.sectionsList,
        idCurrentSection : state.idCurrentSection,


        changeStateCreate_Fn,
        changeStateList_Fn,
        changeTypeSection_Fn

      }}
    >
      {children}
    </stateContext.Provider>
  )
}

export default ResultProvider

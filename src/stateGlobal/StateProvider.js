import React, { createContext, useContext, useReducer } from 'react'
import stateReducer from './stateReducer';


const stateContext = createContext();

export const contextState = () => {
  const context = useContext(stateContext);
  return context;
}



const StateProvider = ({ children }) => {
  const initialState = {
    test: 0,
    /* tab introduction */
    introductionObj:{
      heading   : "Welcome to your diagnostic",
      subheading: "Discovery your hair condition",
      buttomText: "Start",
      class     : "introduction"  
    },

    /* Selected tab */
    selectedTab: 0
  }

  const [state, dispatch] = useReducer(stateReducer, initialState);

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

  const chageSelectedTab_Fn = (index) => {
    dispatch({
      type: 'CHANGE_SELECTED_TAB',
      payload: index
    })
  }


  return (
    <stateContext.Provider 
    
      value={{
       
        test            : state.test,
        introductionObj : state.introductionObj,
        selectedTab     : state.selectedTab,

        increseamFn,
        decreseamFn,
        handleChangeState_Fn,
        chageSelectedTab_Fn
      }}
    >

      { children }
    </stateContext.Provider>
  )
}

export default StateProvider;
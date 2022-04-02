import React from 'react'
import {getObjectSection} from '../../helpers/getObjectSection';

const resultReducer = (state, action) => {
  
  const STATES_CONDITION = {
    'CHANGE_STATE_CREATE' : () => changeStateCreateSection(action.payload),
    'CHANGE_TYPE_SECTION' : () => changeTypeSection(action.payload),
    'CHANGE_STATE_LIST' : () => changeStateListSection(action.payload),

  }
  const STATE_DEFAULT = state;

  /* functions */

  const changeStateCreateSection = (isTrue) => {
    const objecContent = getObjectSection(state.typeSectionSelected);
    const idCurrent = state.idCurrentSection;
    return {
      ...state,
      createSection: isTrue,
      sectionsList : [...state.sectionsList, {id:idCurrent, type:state.typeSectionSelected, content:objecContent}]
    }
  }

  const changeTypeSection = (typeSection) => {
    const idCurrent = state.idCurrentSection;
    const obj = getObjectSection(typeSection);

    console.log("validate", obj);
 
    const objUpdate = state.sectionsList.map(e => e.id===idCurrent ? {...e, type: typeSection, content: obj } : e)

    return {
      ...state,
      typeSectionSelected: typeSection,
      sectionsList : objUpdate
    }
  }

  const changeStateListSection = (isFalse) => {
    return {
      ...state,
      createSection: isFalse
    }
  }

  /* functions */




   /* call condition */
   const stateReturn = STATES_CONDITION[action.type] 
   ? STATES_CONDITION[action.type]() 
   : STATE_DEFAULT;


 return stateReturn;
}

export default resultReducer
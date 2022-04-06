import React from 'react'
import {getObjectSection} from '../../helpers/getObjectSection';
import nextId, {setPrefix} from "react-id-generator";
import { getKey_Value_ChoiceSelected } from '../../helpers/helpersReducer';

const resultReducer = (state, action) => {
  
  setPrefix("");

  const STATES_CONDITION = {
    'CHANGE_STATE_CREATE' : () => changeStateCreateSection(action.payload),
    'CHANGE_TYPE_SECTION' : () => changeTypeSection(action.payload),
    'CHANGE_STATE_LIST' : () => changeStateListSection(action.payload),
    'CHANGE_STATE_SECTIONS_FORM' : () => changeStateSectionForm(action.payload),
    'ADD_OPTION_SECTION' : () => addOptionSection(action.payload),
    'CHANGE_STATE_OPTION_SECTION' : () => chageStateOptionSection(action.payload),
    'LOAD_STATE_LIST_SECTION' : () => loadStateListSection(action.payload)

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
    const objectInitial = getObjectSection(typeSection);
 
    const objUpdate = state.sectionsList.map(e => e.id===idCurrent ? {...e, type: typeSection, content: objectInitial } : e)

    return {
      ...state,
      typeSectionSelected: typeSection,
      sectionsList : objUpdate
    }
  }

  const changeStateListSection = (isFalse) => {
    return {
      ...state,
      createSection: isFalse,
      sectionsList: state.sectionsList.filter(e => e.id !== 0  )
    }
  }

  const changeStateSectionForm = ({name, value, id_section}) => { 
    return {
      ...state,
      sectionsList: state.sectionsList.map(e => e.id === id_section ? {...e, content : {...e.content, [name]: value} } : e)    
  }
}

  const addOptionSection = (idCurrentSection) => {

    const {keyChoice, valueChoice} = getKey_Value_ChoiceSelected('image');

    return{
      ...state,
      sectionsList: state.sectionsList.map(e => e.id === idCurrentSection ? {...e, content : {...e.content, images:[...e.content.images, {id: parseInt(nextId()), label: 'Text', [keyChoice]: valueChoice}]} } : e)   
    }
  }

  const chageStateOptionSection = ({name, value, id_option, idCurrentSection}) => {
    return {
      ...state,
      sectionsList: state.sectionsList.map(e => e.id === idCurrentSection ? {...e, content : {...e.content, images: e.content.images.map(op => op.id === parseInt(id_option) ? {...op, [name]: value} : op)} } : e) 
    }
  }

  const loadStateListSection = ({items, totalItems}) => {
    const itemsObj = items.map(e => ({...e, content: JSON.parse(e.content)}))
    console.log("reisar:", itemsObj);
    return {
      ...state,
      sectionsList: itemsObj,
      totalSections:totalItems
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
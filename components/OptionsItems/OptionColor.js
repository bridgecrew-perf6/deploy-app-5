import React from 'react'
import InputCustom from '../Input/InputCustom'
import ItemColor from '../Items/ItemColor'

const OptionColor = ({element, handleTagEditable, handleChangeText}) => {
  return (
      <ItemColor 
        justifyC='flex-start' 
        dataId={element.id} 
        handleTagEditable={handleTagEditable}
        textLabel={element.label} 
      >  
        <InputCustom  
          dataId={element.id}
          typeInput="color"
          nameInput="color"
          handle={handleChangeText}
          valueInput={element.color}
        /> 
      </ItemColor>
  )
}

export default OptionColor
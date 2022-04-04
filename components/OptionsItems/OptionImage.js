import React from 'react'
import InputCustom from '../Input/InputCustom'
import ItemImage from '../Items/ItemImage'
import { UploadSvg } from '../Svgs/SvgFiles'

const OptionImage = ({element, handleTagEditable, handleChangeText}) => {
  return (
          
            <ItemImage 
              urlImg={element.image} 
              iconSvg={<UploadSvg/>}
              dataId={element.id} 
              handleTagEditable={handleTagEditable}
              textLabel={element.label} 
            >                     
                <InputCustom 
                  dataId={element.id} 
                  typeInput="file"
                  nameInput="image"
                  handle={handleChangeText}
                  valueInput={element.image}
                  hideValue={true}            
              />
            </ItemImage>  

  )
}

export default OptionImage
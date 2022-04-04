import React from 'react'
import Img from '../Img/Img';
import LabelEdit from '../LabelEditable/LabelEdit';
import { Div } from './styles';

const ItemImage = ({children, urlImg, iconSvg, justifyC, dataId, handleTagEditable,textLabel}) => {

  return (
      <Div justifyC={justifyC}>
            <div>
              <Img urlImg={urlImg}/>
              {
                textLabel && 
                  <LabelEdit 
                    dataId={dataId}
                    handleTagEditable={handleTagEditable}
                    textLabel={textLabel}
                  /> 
              }
            </div>
            <div> 
              {children} 
              {iconSvg}
            </div>
      </Div>
  )
}

export default ItemImage
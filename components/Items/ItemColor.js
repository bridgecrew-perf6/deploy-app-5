import React from 'react'
import Img from '../Img/Img';
import LabelEdit from '../LabelEditable/LabelEdit';
import { Div } from './styles';

const ItemColor = ({children, justifyC, dataId, handleTagEditable,textLabel}) => {

  return (
    <Div justifyC={justifyC}>     
          {children}
          { 
            textLabel && 
              <LabelEdit 
                dataId={dataId}
                handleTagEditable={handleTagEditable}
                textLabel={textLabel}
              />
          } 
    </Div>
  )
}

export default ItemColor
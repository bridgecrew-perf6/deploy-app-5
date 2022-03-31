import React from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { DeleteSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const OptionDelete = ({children, actionDelete, loadingState}) => {
  return (
      <Div>

        { children } 
        
        <div onClick={actionDelete}> 
          {loadingState 
            ? <LoadingSpinner/> 
            : <DeleteSvg/> 
          }
        </div>

      </Div>
  )
}

export default OptionDelete
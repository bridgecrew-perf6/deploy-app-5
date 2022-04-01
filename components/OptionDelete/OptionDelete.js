import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { DeleteSvg } from '../Svgs/SvgFiles'
import { Div } from './styles'

const OptionDelete = ({children, actionDelete, loadingState, resetState = {status:false, id: 0}}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!resetState.status){
      setLoading(false)
    }
  }, [resetState])
  
  return (
      <Div>

        { children } 
        
        <div onClick={() => { setLoading(true); actionDelete();}}> 
          {(loading && loadingState)
            ? <LoadingSpinner/> 
            : <DeleteSvg/> 
          }
        </div>

      </Div>
  )
}

export default OptionDelete
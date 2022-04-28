import React from 'react'
import CardPreview from '../CardPreview/CardPreview'
import IntroductionDetails from '../IntroductionDetails/IntroductionDetails'
import IntroductionPreview from '../IntroductionPreview/IntroductionPreview'

const Introduction = () => {
  return (
      <>
        <div className='content_tab--preview'>   
          <CardPreview >                                
              <IntroductionPreview/>
          </CardPreview>
        </div>  

        <div className='content_tab--customize'>                
          <IntroductionDetails/> 
        </div>
      </>
  )
}

export default Introduction
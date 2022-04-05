import React from 'react'
import { contextResult } from '../../states/result/ResultProvider'

const ResultPreview = () => {

  const {sectionsList}  = contextResult();



  return (
    <div>
      <h2>Result</h2>

      {
        sectionsList.map(e => {
          
          const {title, subtitle, parragrah} = e.content;

          return (
            <>

            <h2>title:{title}</h2>

            <h3>subtitle:{subtitle}</h3>

            <p>parragrah:{parragrah}</p>

            <br/>
              <hr/>

            </>

          )
        })
      }
      

    </div>
  )
}

export default ResultPreview
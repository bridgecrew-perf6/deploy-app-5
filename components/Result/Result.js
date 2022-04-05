
import { useQuery } from 'react-query'
import { contextResult } from '../../states/result/ResultProvider'
import CardPreview from '../CardPreview/CardPreview'
import ResultDetails from '../ResultDetails/ResultDetails'
import ResultList from '../ResultList/ResultList'
import ResultPreview from '../ResultPreview/ResultPreview'

const Result = () => {

  const { createSection, getSectionList_Fn,totalSections, sectionsList} = contextResult();


  const {
    isError,
    isLoading
    } = useQuery(['getlistsection'], getSectionList_Fn);



console.log("sections:",{isError, isLoading});

  return (
    <>
      <div className='content_tab--preview'>   
        <CardPreview >                                
            <ResultPreview/>
        </CardPreview>
      </div>  

      <div className='content_tab--customize'>                
        {!createSection 
            ? <ResultList/>
            : <ResultDetails/>
        } 
      </div>
    </>
  )
}

export default Result
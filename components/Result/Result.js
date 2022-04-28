
import { useQuery } from 'react-query'
import { contextResult } from '../../states/result/ResultProvider'
import CardPreview from '../CardPreview/CardPreview'
import Message from '../Message/Message'
import ResultDetails from '../ResultDetails/ResultDetails'
import ResultList from '../ResultList/ResultList'
import ResultPreview from '../ResultPreview/ResultPreview'

const Result = () => {

  const { createSection, getSectionList_Fn} = contextResult();

/* get server list sections */
  const {
    isError,
    isLoading
    } = useQuery(['getlistsection'], getSectionList_Fn);

/* get server list sections */


console.log("sections:",{isError, isLoading});

  return (
    <>
      <div className='content_tab--preview'>   
        <CardPreview >                                
            <ResultPreview isLoading={isLoading}/>
        </CardPreview>
      </div>  

      <div className='content_tab--customize'>                
        {!createSection 
            ? <ResultList/>
            : <ResultDetails/>
        } 
      </div>

      {isError && <Message mesagge="Error load sections" error={true} /> }
    </>
  )
}

export default Result
import { 
  Card,
} from '@shopify/polaris';
import { contextResult } from '../../states/result/ResultProvider';
import Action from '../ActionText/Action';
import SelectList from '../SelectList/SelectList';
import { AddSvg, PrevSvg } from '../Svgs/SvgFiles';
import selectProps from '../SelectList/data';
import { useCallback } from 'react';
import FormSection from './FormSection';
import OptionDelete from '../OptionDelete/OptionDelete';
import OptionImage from '../OptionsItems/OptionImage';
import Button from '../Button/Button';
import { useMutation, useQueryClient } from 'react-query';

const ResultDetails = () => {

  const {
      changeStateList_Fn, 
      changeTypeSection_Fn, 
      typeSectionSelected, 
      sectionsList, 
      idCurrentSection,
      changeStateSection_Fn,
      addOptionSection_Fn,
      changeStateOption_Fn,
      saveSection_Fn
    } = contextResult();

      console.log(sectionsList);
  /* get sections current */
  const sectionCurrent= sectionsList.filter(e => e.id === idCurrentSection)[0];
 
  const  {content} = sectionCurrent;

  console.log({sectionCurrent, content});
  /* options select */
  const {optionsSection} = selectProps();

  /* Change select section options */
  const handleSelectChange = useCallback((value) => changeTypeSection_Fn(value), []);

  /* show list sections */
  const actionChangeList = () => {
    changeStateList_Fn(false)
  }

  /* add options section (images) */
  const actionAddOption = () => {
    addOptionSection_Fn(idCurrentSection);
  }

  /* change state form */
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    changeStateSection_Fn(name, value, idCurrentSection);
  }

  const handleChangeOption = (e) => {
    let {name} = e.target;
    let value = URL.createObjectURL(e.target.files[0]);
     
    let id_option = e.target.dataset.id; 
    console.log({name , value , id_option, idCurrentSection});

    /* 
      name: name the field
      value: value typiying
      id_option: option change
      idCurrentSection: id section Editing or creating
    */
    changeStateOption_Fn(name , value , id_option, idCurrentSection)
  }




/* Send register question update */
const queryClient = useQueryClient();

const {mutate, isError, isLoading, isSuccess} = 
  useMutation(saveSection_Fn, {
    /* onSuccess: (list) => {
      queryClient.invalidateQueries(["getlistquestion"]),
      queryClient.invalidateQueries(["getquestionoptions"])
    } */
  });

  const actionSaveSection = () => {
    mutate(sectionCurrent);
  }
  /* Send register question update */
console.log({isError, isLoading, isSuccess});

  return (
    <Card >
      <Card.Section>
        <Action 
          title='Add a sections'  
          eventAction={actionChangeList}
          reverse="reverse"
          btnSvg={<PrevSvg/>}
        />
      </Card.Section>

      <Card.Section>
        {/* option type section */}
        <SelectList 
          title="Type section"
          optionsQuestion={optionsSection}
          selectSelected={typeSectionSelected}
          handleSelectChange={handleSelectChange} 
        /> {/* select option type section */}
      </Card.Section>

      <Card.Section>
        <FormSection 
          content={content} 
          handleChangeText={handleChangeText}
        />
      </Card.Section>

     
        {
          content.images
            &&  
            <Card.Section>
              <Action 
                title='Options' 
                btnText='Add' 
                btnSvg={<AddSvg/>} 
                eventAction={actionAddOption}
                divMargin='0 0 19px 0'
              />
              
              {content.images.map((element) => 
                (      
                  <div key={element.id}>
                    <OptionDelete 
                      /* actionDelete={() => deleteValidate(element.id)} */
                      /* loadingState={isLoading}
                      resetState={showconfirm} */
                      >    
                      <OptionImage
                        element={element}
                        /* handleTagEditable={handleTagEditable} */
                        handleChangeText={handleChangeOption} 
                        />  
                    </OptionDelete> 
                  </div>  
                ))}
            </Card.Section>
        }   
                 
          <Card.Section>
            <Button 
              btnText='Save Section'
              /* loadingState={isLoading} */ 
              wBtn='100%' 
              mBtn='10px 0'
              eventAction={actionSaveSection}
              />  
          </Card.Section>
    </Card>
  )
}

export default ResultDetails
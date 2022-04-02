import { 
  Card,
} from '@shopify/polaris';
import { contextResult } from '../../states/result/ResultProvider';
import Action from '../ActionText/Action';
import SelectList from '../SelectList/SelectList';
import { AddSvg, PrevSvg } from '../Svgs/SvgFiles';
import selectProps from '../SelectList/data';
import { useCallback } from 'react';
import InputCustom from '../Input/InputCustom';
import InputTextarea from '../Textarea/InputTextarea';
import OptionsSection from '../OptionsSection/OptionsSection';

const ResultDetails = () => {

  const {changeStateList_Fn, changeTypeSection_Fn, typeSectionSelected, sectionsList, idCurrentSection} = contextResult();

  const {optionsSection} = selectProps();

  const actionChangeList = () => {
    changeStateList_Fn(false)
  }

  /* Change select section options */
  const handleSelectChange = useCallback((value) => changeTypeSection_Fn(value), []);

/* Change select section options */
const {content} = sectionsList.filter(e => e.id === idCurrentSection)[0];
console.log("lista:", content);  

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
          optionsQuestion={optionsSection}
          selectSelected={typeSectionSelected}
          handleSelectChange={handleSelectChange} 
        /> {/* select option type section */}
      </Card.Section>

      <Card.Section>
        <InputCustom
          labelText='Title'
          nameInput="title"
          valueInput={content.title}
          /* handle={handleChangeText} */
        />
        <InputCustom
          labelText='Subtitle'
          nameInput="subtitle"
          valueInput={content.subtitle}
          /* handle={handleChangeText} */
        />
        <InputTextarea
          labelText='Parragrah'
          nameInput="parragrah"
          /* handle={handleChangeText} */
          valueInput={content.parragrah}
        />
      </Card.Section>

      <Card.Section>
        {
          content.images
            &&  
            <>
              <Action 
                title='Options' 
                btnText='Add' 
                btnSvg={<AddSvg/>} 
                /* eventAction={actionAddOption} */
                divMargin='0 0 19px 0'
              />
              <OptionsSection/>
            </>
        } 
                 
             
          </Card.Section>
    </Card>
  )
}

export default ResultDetails
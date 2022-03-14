import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';


const TypeQuestionSelect = () => {

  const { selectSelected, changeTypeQuestion_Fn, question } = contextDiagnostic()

  console.log(question);
  const handleSelectChange = useCallback((value) => changeTypeQuestion_Fn(value), []);

/*   const options = [
    {label: 'Text', value: 'InputText'},
    {label: 'Number', value: 'InputNumber'},
    {label: 'Email', value: 'InputEmail'},
    {label: 'Multiple Option', value: 'MultipleOptionText'},
    {label: 'Image Option', value: 'MultipleOptionImage'},
    {label: 'Color Option', value: 'MultipleOptionColor'},
    {label: 'Text Area', value: 'InputTextarea'},

  ]; */

  const options = [
    {label: 'Text', value: 'Input_text'},
    {label: 'Number', value: 'Input_number'},
    {label: 'Email', value: 'Input_email'},
    {label: 'Multiple Option', value: 'Multiple_choice'},
    {label: 'Image Option', value: 'Multiple_image'},
    {label: 'Color Option', value: 'Multiple_color'},
    {label: 'Text Area', value: 'Input_textarea'},

  ];

  return (
    <>
      <Select
          label="Date range"
          options={options}
          onChange={handleSelectChange}
          value={selectSelected}
        />
    </>
  )
}

export default TypeQuestionSelect
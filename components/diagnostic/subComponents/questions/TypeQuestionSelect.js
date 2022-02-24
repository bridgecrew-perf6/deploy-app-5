import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';


const TypeQuestionSelect = () => {

  const { typeQuestionSelected, changeTypeQuestion_Fn } = contextDiagnostic()

  const handleSelectChange = useCallback((value) => changeTypeQuestion_Fn(value), []);


  const options = [
    {label: 'Text', value: 'InputText'},
    {label: 'Number', value: 'InputNumber'},
    {label: 'Email', value: 'InputEmail'},
    {label: 'Multiple Option', value: 'MultipleOptionText'},
    {label: 'Image Option', value: 'MultipleOptionImage'},
    {label: 'Color Option', value: 'MultipleOptionColor'},
    {label: 'Text Area', value: 'InputTextarea'},

  ];

  return (
    <>
      <Select
          label="Date range"
          options={options}
          onChange={handleSelectChange}
          value={typeQuestionSelected}
        />
    </>
  )
}

export default TypeQuestionSelect
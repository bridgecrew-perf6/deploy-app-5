import { 
  Card,
  Select
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { contextDiagnostic } from '../../../../src/stateGlobal/diagnostic/DiagnosticProvider';


const TypeQuestionSelect = () => {

  const { typeQuestionSelected, changeTypeQuestion_FN } = contextDiagnostic()

  const handleSelectChange = useCallback((value) => changeTypeQuestion_FN(value), []);


  const options = [
    {label: 'Text', value: 'InputText'},
    {label: 'Number', value: 'InputNumber'},
    {label: 'Email', value: 'InputEmail'},
    {label: 'Multiple Option', value: 'MultipleOptionCheck'},
    {label: 'Image Option', value: 'MultipleOptionImage'},
    {label: 'Color Option', value: 'MultipleOptionColor'},
    {label: 'Text Area', value: 'InputTeaxarea'},

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
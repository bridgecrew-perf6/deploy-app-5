import { 
  Select
} from '@shopify/polaris';



const SelectList = ({optionsQuestion, selectSelected, handleSelectChange}) => {

  return (
    <>
      <Select
          label="Date range"
          options={optionsQuestion}
          onChange={handleSelectChange}
          value={selectSelected}
        />
    </>
  )
}

export default SelectList
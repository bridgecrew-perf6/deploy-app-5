import { 
  Select
} from '@shopify/polaris';
import { Div } from './styles';



const SelectList = ({optionsQuestion, selectSelected, handleSelectChange}) => {

  return (
    <Div>
      <Select
          label="Date range"
          options={optionsQuestion}
          onChange={handleSelectChange}
          value={selectSelected}
        />
    </Div>
  )
}

export default SelectList
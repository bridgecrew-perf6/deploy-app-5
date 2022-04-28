import { 
  Select
} from '@shopify/polaris';
import { Div } from './styles';



const SelectList = ({optionsQuestion, selectSelected, handleSelectChange, title}) => {

  return (
    <Div>
      <Select
          label={title}
          options={optionsQuestion}
          onChange={handleSelectChange}
          value={selectSelected}
        />
    </Div>
  )
}

export default SelectList
import { 
  Button,
  Card,
  Select,
  Subheading
} from '@shopify/polaris';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const BtnAddOptions = () => {

  const { question, addOptionQuestion_Fn, keyChoiceTypeSelected } = contextDiagnostic();
 
  const sizeOption = question.choices.length;

    return (
      <>
          <Card.Section 
             >
              <div className='btn_add-option'>
              <Subheading>Options</Subheading>   
              <Button>
                  Add  
                  <svg 
                    className='btn-add-svg'
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 11.6355 3.3645 15 7.5 15C11.6355 15 15 11.6355 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5ZM3.75 7.5C3.75 7.08579 4.08579 6.75 4.5 6.75H6.75V4.5C6.75 4.08579 7.08579 3.75 7.5 3.75C7.91421 3.75 8.25 4.08579 8.25 4.5V6.75H10.5C10.9142 6.75 11.25 7.08579 11.25 7.5C11.25 7.91421 10.9142 8.25 10.5 8.25H8.25V10.5C8.25 10.9142 7.91421 11.25 7.5 11.25C7.08579 11.25 6.75 10.9142 6.75 10.5V8.25H4.5C4.08579 8.25 3.75 7.91421 3.75 7.5Z" fill="#7551DC"/>
                  </svg>
              </Button> 
              </div>
              
          </Card.Section>
      </>
    )
}

export default BtnAddOptions
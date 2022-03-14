import { 
  Card,
  Select
} from '@shopify/polaris';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const BtnAddOptions = () => {

  const { question, addOptionQuestion_Fn, keyChoiceTypeSelected } = contextDiagnostic();
 
  const sizeOption = question.choices.length;

    return (
      <>
          <Card.Section title="Options" actions={[{content: 'Add', onAction: () => addOptionQuestion_Fn({id: sizeOption , [keyChoiceTypeSelected]: keyChoiceTypeSelected}) }]} >
          </Card.Section>
      </>
    )
}

export default BtnAddOptions
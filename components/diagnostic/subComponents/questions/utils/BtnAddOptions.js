import { 
  Card,
  Select
} from '@shopify/polaris';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'

const BtnAddOptions = () => {

  const { typeQuestionSelected, question, addOptionQuestion_Fn } = contextDiagnostic();
 
  const sizeOption = question.type.length;

  console.log(question);

  if(typeQuestionSelected.includes('Multiple')){
    return (
      <>
          <Card.Section>
          </Card.Section>
          <Card.Section title="Options" actions={[{content: 'Add', onAction: () => addOptionQuestion_Fn({[typeQuestionSelected+sizeOption]: "value1"}) }]} >
          </Card.Section>
      </>
    )
  }else{ return null}

 
}

export default BtnAddOptions
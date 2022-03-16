import { 
  Card
} from '@shopify/polaris';
import { contextDiagnostic } from '../../../../../src/stateGlobal/diagnostic/DiagnosticProvider'
import Action from '../../../../ActionText/Action';
import { AddSvg } from '../../../../Svgs/SvgFiles';
const BtnAddOptions = () => {

  const { question, addOptionQuestion_Fn, keyChoiceTypeSelected } = contextDiagnostic();
 
  const sizeOption = question.choices.length;

  const handleAction = () => {
    addOptionQuestion_Fn({id: sizeOption , [keyChoiceTypeSelected]: keyChoiceTypeSelected})
  }

    return (
          <Card.Section>
              <Action 
                title='Options' 
                btnText='Add' 
                btnSvg={<AddSvg/>} 
                eventAction={handleAction}/>    
          </Card.Section>
    )
}

export default BtnAddOptions
import { 
  Card,
} from '@shopify/polaris';

const QuestionCustomize = () => {

  const testCall = () => {
    console.log("test");
  }
  return (
    <Card >
      <Card.Section title="List of questions">
      </Card.Section>
      <Card.Section >
        <p>List questions</p>
      </Card.Section>
      <Card.Section title="Add questions" actions={[{content: 'Add',onAction:() => console.log("aquiiiiii")}]} >
      </Card.Section>
    </Card>
  )
}

export default QuestionCustomize
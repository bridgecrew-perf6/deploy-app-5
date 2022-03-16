
import { 
  Page,
  Card 
} from '@shopify/polaris';

const CardTitle = ({title, children}) => {
  return (
    <Card>
      <Card.Section title={title}>  
        {children}
      </Card.Section > 
    </Card>
  )
}

export default CardTitle

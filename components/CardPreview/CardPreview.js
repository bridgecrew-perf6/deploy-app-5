
import { 
  Card 
} from '@shopify/polaris';
import { BtnWinSvg } from '../Svgs/SvgFiles';
import { WindowStyle } from './styles';

const CardPreview = ({title, children}) => {
  return (
    <Card>
      <Card.Section title={title}>
        <WindowStyle>
          <span>
            <BtnWinSvg/>
          </span>

            {children}

        </WindowStyle>  
      </Card.Section > 
    </Card>
  )
}

export default CardPreview

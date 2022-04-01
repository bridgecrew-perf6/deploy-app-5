
import { 
  Card,
  Layout,
  SkeletonBodyText, 
  SkeletonDisplayText, 
  SkeletonPage, 
  TextContainer
} from '@shopify/polaris';
const Skeleton = ({lineText = 10}) => {
  return (
    <SkeletonPage primaryAction={false} >
        <Layout>
          <Layout.Section>
        
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={lineText}/>
              </TextContainer>

          </Layout.Section>
        </Layout>
      </SkeletonPage>  
  )
}

export default Skeleton
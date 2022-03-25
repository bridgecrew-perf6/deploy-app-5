
import { 
  Card,
  Layout,
  SkeletonBodyText, 
  SkeletonDisplayText, 
  SkeletonPage, 
  TextContainer
} from '@shopify/polaris';
const Skeleton = () => {
  return (
    <SkeletonPage primaryAction >
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <SkeletonBodyText />
            </Card>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={10}/>
              </TextContainer>
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>  
  )
}

export default Skeleton
import { Heading, Page } from "@shopify/polaris";
import { useEffect } from "react";
import { tokenInitial } from "../services/init/tokenInitial";


export default function Index() {

  useEffect(() => {
    // tokenInitial();
  }, [])
 
  return (
    <>
    
      <div className="container">
        <Page title="Home">
          <Heading>
              {/* COMPONENT */}          
              Home
          </Heading>
        </Page>
      </div>
    </>
  );
}

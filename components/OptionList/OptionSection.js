import { Card } from "@shopify/polaris";
import React from "react";
import OptionDelete from "../OptionDelete/OptionDelete";
import OptionImage from "../OptionsItems/OptionImage";
import InputTextarea from "../Textarea/InputTextarea";

const OptionSection = ({ content, handleChangeText }) => {
  return (
    <>
      {content.images &&
        content.images.map((element) => (
          <div key={element.id}>
            <OptionDelete
            /* actionDelete={() => deleteValidate(element.id)} */
            /* loadingState={isLoading}
                resetState={showconfirm} */
            >
              <OptionImage
                element={element}
                handleChangeText={handleChangeText}
              />
            </OptionDelete>
          </div>
        ))}
      {content.blocks &&
        content.blocks.map((element) => (
          <Card.Subsection key={element.id}>
            <OptionDelete
            /* actionDelete={() => deleteValidate(element.id)} */
            /* loadingState={isLoading}
                resetState={showconfirm} */
            >
              <OptionImage
                element={element}
                handleChangeText={handleChangeText}
              />
            </OptionDelete>
            <InputTextarea
              labelText="Item list"
              dataId={element.id}
              nameInput="listItem"
              handle={handleChangeText}
              valueInput={element.listItem}
              wTxtarea="80%"
            />
          </Card.Subsection>
        ))}
    </>
  );
};

export default OptionSection;

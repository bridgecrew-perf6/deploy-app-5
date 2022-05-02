import React from "react";
import Img from "../Img/Img";
import InputCustom from "../Input/InputCustom";
import LabelEdit from "../LabelEditable/LabelEdit";
import { Div } from "./styles";

const ItemColor = ({ children, justifyC, dataId, handleTag, tagText }) => {
  return (
    <Div justifyC={justifyC}>
      {children}
      {
        <InputCustom
          wInput="50%"
          hInput="24px"
          dataId={dataId}
          nameInput="label"
          handle={handleTag}
          valueInput={tagText}
        />
      }
    </Div>
  );
};

export default ItemColor;

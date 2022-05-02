import React from "react";
import Img from "../Img/Img";
import InputCustom from "../Input/InputCustom";
import LabelEdit from "../LabelEditable/LabelEdit";
import { Div } from "./styles";

const ItemImage = ({
  children,
  urlImg,
  iconSvg,
  justifyC,
  dataId,
  handleTag,
  tagText,
}) => {
  return (
    <Div justifyC={justifyC}>
      <div>
        <Img urlImg={urlImg} />
        <InputCustom
          wInput="65%"
          hInput="24px"
          dataId={dataId}
          nameInput="label"
          handle={handleTag}
          valueInput={tagText}
        />
      </div>
      <div>
        {children}
        {iconSvg}
      </div>
    </Div>
  );
};

export default ItemImage;

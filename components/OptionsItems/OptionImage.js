import React from "react";
import InputCustom from "../Input/InputCustom";
import ItemImage from "../Items/ItemImage";
import { UploadSvg } from "../Svgs/SvgFiles";

const OptionImage = ({ element, handleChangeText }) => {
  console.log("lement", element);
  return (
    <ItemImage
      urlImg={element.image}
      iconSvg={<UploadSvg />}
      dataId={element.id}
      handleTag={handleChangeText}
      tagText={element.label}
    >
      <InputCustom
        dataId={element.id}
        typeInput="file"
        nameInput="image"
        handle={handleChangeText}
        valueInput={element.image}
      />
    </ItemImage>
  );
};

export default OptionImage;

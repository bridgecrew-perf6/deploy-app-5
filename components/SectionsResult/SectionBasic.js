import React from "react";
import Img from "../Img/Img";
import { EmptyStyle, SectionStyles, BlockStyle } from "./styles";

const SectionBasic = ({ data }) => {
  const { type, id } = data;
  const { title, subtitle, parragrah, images, blocks } = data.content;

  console.log(data);
  return (
    <SectionStyles key={id}>
      <h2>{title}</h2>

      <h3>{subtitle}</h3>

      <p>{parragrah}</p>

      {type === "images" && (
        <div>
          {images.map((img) => (
            <span>
              <Img urlImg={img.image} wImg="130px" hImg="130px" />
              {img.label}
            </span>
          ))}
        </div>
      )}

      {type === "blocks" && (
        <div>
          {blocks.map((block) => (
            <BlockStyle>
              <Img urlImg={block.image} wImg="80px" hImg="80px" />
              <strong>{block.label}</strong>
              <span>{block.listItem}</span>
            </BlockStyle>
          ))}
        </div>
      )}

      {type === "score" && <EmptyStyle>Score</EmptyStyle>}

      {type === "recommendation" && <EmptyStyle>Recommendation</EmptyStyle>}
    </SectionStyles>
  );
};

export default SectionBasic;

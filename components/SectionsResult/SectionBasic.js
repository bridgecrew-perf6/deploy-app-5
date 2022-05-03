import React from "react";
import Img from "../Img/Img";
import { ListSvg } from "../Svgs/SvgFiles";
import UnorderedList from "../UnorderedList/UnorderedList";
import { EmptyStyle, SectionStyles, BlockStyle, ImageStyle } from "./styles";

const SectionBasic = ({ data }) => {
  const { type, id } = data;
  const { title, subtitle, parragrah, images, blocks } = data.content;

  return (
    <SectionStyles key={id} blocks={blocks}>
      <h2>{title}</h2>

      <h3>{subtitle}</h3>

      <p>{parragrah}</p>

      {type === "images" && (
        <div>
          {images.map((img) => (
            <ImageStyle>
              <Img urlImg={img.image} wImg="130px" hImg="130px" />
              {img.label}
            </ImageStyle>
          ))}
        </div>
      )}

      {type === "blocks" && (
        <div>
          {blocks.map((block) => (
            <BlockStyle>
              <span>
              <Img urlImg={block.image} wImg="90%" hImg="70px" />
              <strong>{block.label}</strong>
              </span>
              <UnorderedList data={block.listItem} icon={<ListSvg/>}/>
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

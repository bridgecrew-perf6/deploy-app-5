import React from "react";
import Img from "../Img/Img";
import { EmptyStyle, SectionStyles } from "./styles";

const SectionBasic = ({ data }) => {
  const { type, id } = data;
  const { title, subtitle, parragrah, images } = data.content;

  console.log(data);
  return (
    <SectionStyles>
      <h2>{title}</h2>

      <h3>{subtitle}</h3>

      <p>{parragrah}</p>

      {type === "images" && (
        <div>
          {images.map((img) => (
            <span key={img.id}>
              <Img urlImg={img.image} wImg="130px" hImg="130px" />
              {img.label}
            </span>
          ))}
        </div>
      )}

      {type === "blocks" && (
        <div>
          {images.map((img) => (
            <span key={img.id}>
              <Img urlImg={img.image} wImg="130px" hImg="130px" />
              {img.label}
            </span>
          ))}
        </div>
      )}

      {type === "score" && <EmptyStyle>Score</EmptyStyle>}

      {type === "recommendation" && <EmptyStyle>Recommendation</EmptyStyle>}
    </SectionStyles>
  );
};

export default SectionBasic;

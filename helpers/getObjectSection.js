import React from "react";
import image from "../public/imagePrev.png";

export const getObjectSection = (selectSelected) => {
  let objectInitial = {
    title: "Write your title",
    subtitle: "Write a subtitle",
    parragrah: "Yoy descriptions",
  };

  if (selectSelected === "images") {
    objectInitial = {
      ...objectInitial,
      images: [
        {
          id: 0,
          label: "Text",
          image: image.src,
        },
      ],
    };
  } else if (selectSelected === "blocks") {
    objectInitial = {
      ...objectInitial,
      blocks: [
        {
          id: 0,
          label: "Text",
          image: image.src,
          listItem: "Item1, Item2, Item3",
        },
      ],
    };
  }

  return objectInitial;
};

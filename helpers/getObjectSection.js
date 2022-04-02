import React from 'react'
const Diamond = require('../public/imagePrev.png');

export const getObjectSection = (selectSelected) => {

  let objectInitial = {
    title: "Write your title",
    subtitle: "Write a subtitle",
    parragrah: "Yoy descriptions"
  }

  if(selectSelected === 'sectionImage'){
    objectInitial = {
      title: "Write your title",
      subtitle: "Write a subtitle",
      parragrah: "Yoy descriptions",
      images:[{
        id: 0, image: `${Diamond}`
      }]
    }
  }


  return objectInitial ;
}

import React from 'react'
import image from '../public/imagePrev.png'


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
        id: 0, label:'Text',  image: image.src
      }]
    }
  }


  return objectInitial ;
}

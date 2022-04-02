
const data =  () => {

 const  optionsQuestion = [
        {label: 'Text', value: 'text'},
        {label: 'Number', value: 'number'},
        {label: 'Email', value: 'email'},
        {label: 'Multiple Option', value: 'choice'},
        {label: 'Image Option', value: 'image'},
        {label: 'Color Option', value: 'color'},
        {label: 'Text Area', value: 'textarea'},
    ];

    const  optionsSection = [
      {label: 'Hero', value: 'hero'},
      {label: 'Score', value: 'score'},
      {label: 'Section', value: 'section'},
      {label: 'Section + IMG', value: 'sectionImage'},
      {label: 'Recommendation', value: 'recommendation'}
  ];

return {
  optionsQuestion,
  optionsSection
}
}

export default data;


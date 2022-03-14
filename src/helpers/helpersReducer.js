/* get key and value for type question selected */
export const getKey_Value_ChoiceSelected = (selectSelected) => {

  let keyChoice = 'placeholder';
  let valueChoice = 'placeholder';

  if(selectSelected === 'Multiple_image'){
    keyChoice = 'image';
    valueChoice = 'https://image.shutterstock.com/image-vector/click-icon-vector-select-press-260nw-1151377079.jpg';
  }

  if(selectSelected === 'Multiple_color') {
    keyChoice = 'color';
    valueChoice = '#0000';
  }

  return {
    keyChoice,
    valueChoice
  }
}
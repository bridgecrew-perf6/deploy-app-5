import React from 'react'
import { ListStyle } from './styles';

const UnorderedList = ({data, icon}) => {
  const items = data.split(',');
  console.log("icon;", {icon});
  return (
    <ListStyle icon={icon}>
      {
        items.map((item) => <li>{icon}<span>{item}</span></li>)
      }
    </ListStyle>
  )
}

export default UnorderedList
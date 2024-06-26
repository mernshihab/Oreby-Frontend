import React from 'react'
const ListItem = ({ListItemName, ListItem, className}) => {
  return (
    <li className={className}>{ListItem}{ListItemName}</li>
  )
}

export default ListItem
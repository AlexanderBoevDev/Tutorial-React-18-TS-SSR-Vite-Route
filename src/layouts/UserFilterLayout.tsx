import React from 'react';
import { Dropdown } from 'primereact/dropdown'
import axios from "axios";

export const UserFilterLayout = ({ value, onChangeAuthor }) => {

  const [itemsUsers, setItemsUsers] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:4301/users`)
    .then(resolve => {
      setItemsUsers(resolve.data)
      }
    )
  }, [])

  return (
    <Dropdown
      value={ itemsUsers[value] }
      onChange={(e) => onChangeAuthor(e.value.id)}
      options={ itemsUsers }
      optionLabel="name"
      placeholder="Blog author"
      className="w-full md:w-14rem" />
  )
}

import React from 'react';
import { Dropdown } from 'primereact/dropdown'

export const UserFilterLayout = ({ value, onChangeAuthor }) => {

  const [itemsUsers, setItemsUsers] = React.useState([])

  React.useEffect(() => {
    fetch(`http://localhost:4301/users`)
    .then((response) => { return response.json() })
    .then((json) => {
      setTimeout(() => {
        setItemsUsers(json)
      })
    })
  }, [])

  const usersObj = itemsUsers.map(obj => (obj))

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

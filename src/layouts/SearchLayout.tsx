import React from 'react'
import { InputText } from 'primereact/inputtext'

import '../scss/SearchLayout.scss'

export const SearchLayout = ({searchValue, setSearchValue}) => {
  return (
    <span className="p-input-icon-left p-input-icon-right p-input-search">
      <i className="pi pi-search" />
      <InputText
        placeholder="Search for a post"
        value={ searchValue }
        onChange={(e) => setSearchValue(e.target.value)}
      />
      { searchValue && (
        <i onClick={()=>setSearchValue('')} className="pi pi-times pi-search-clear" style={{ fontSize: '1rem' }}/>
      )}
    </span>
  )
}

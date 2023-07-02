import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useDebounce } from 'primereact/hooks'

import '../scss/SearchLayout.scss'

export const SearchLayout = ({searchValue, setSearchValue}) => {

  //const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

  const inputRef = React.useRef()
  const onClickClear = () => {
    setSearchValue('')
    // @ts-ignore
    inputRef.current.focus()
  }

  return (
    <div className="p-input-icon-left p-input-icon-right p-input-search">
      <i className="pi pi-search" />
      <InputText
        ref={inputRef}
        placeholder="Search for a post"
        value={ searchValue }
        onChange={(e) => setSearchValue(e.target.value)}
      />
      { searchValue && (
        <i onClick={onClickClear} className="pi pi-times pi-search-clear" style={{ fontSize: '1rem' }}/>
      )}
    </div>
  )
}

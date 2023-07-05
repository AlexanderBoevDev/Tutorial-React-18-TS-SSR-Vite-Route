import React from "react";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import "../scss/SearchLayout.scss";

// @ts-ignore
export const SearchLayout:React.FC = ({ searchValue, setSearchValue }) => {
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    // @ts-ignore
    inputRef.current.focus();
  }

  return (
    <div className="p-input-icon-left p-input-icon-right p-input-search">
      <i className="pi pi-search" />
      <InputText
        ref={ inputRef }
        placeholder="Search for a post"
        value={ searchValue }
        onChange={ (e) => dispatch(setSearchValue(e.target.value)) }
      />
      { searchValue && (
        <i onClick={ onClickClear } className="pi pi-times pi-search-clear" style={{ fontSize: "1rem" }}/>
      )}
    </div>
  )
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../store/slice/FilterSlice";
import { Dropdown } from "primereact/dropdown";

const list = [
  { name: "Sort content id asc", sortProperty: "-id" },
  { name: "Sort content id desc", sortProperty: "id" },
  { name: "Sort title asc", sortProperty: "-title" },
  { name: "Sort title desc", sortProperty: "title" },
  { name: "Sort author asc", sortProperty: "-userId" },
  { name: "Sort author desc", sortProperty: "userId" },
];

export const SortPostLayout:React.FC = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const sort = useSelector(state => state.filter.sort)
  return (
    <Dropdown
      value={ sort }
      onChange={ (e) => dispatch(setSort(e.value)) }
      options={ list }
      optionLabel="name"
      placeholder="Sort by"
      className="w-full md:w-14rem"
    />
  )
}

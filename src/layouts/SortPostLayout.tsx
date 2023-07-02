import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../redux/slice/FilterSlice'
import { Dropdown } from 'primereact/dropdown'

export const sortList = [
  { name: 'Sort title desc', sortProperty: 'title' },
  { name: 'Sort title asc', sortProperty: '-title' },
  { name: 'Sort content id desc', sortProperty: 'id' },
  { name: 'Sort content id asc', sortProperty: '-id'},
  { name: 'Sort author desc', sortProperty: 'userId' },
  { name: 'Sort author asc', sortProperty: '-userId' },
];

export const SortPostLayout = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const sort = useSelector(state => state.filter.sort)

  return (
    <Dropdown
      value={sort}
      onChange={(e) => dispatch(setSort(e.value))}
      options={sortList}
      optionLabel="name"
      placeholder="Sort by"
      className="w-full md:w-14rem"
    />
  )
}

import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown'

export const SortPostLayout = ({ value, onChangeSort }) => {

  const sort = [
    { name: 'Sort title asc', sort:'title', order: 'asc' },
    { name: 'Sort title desc', sort:'title', order: 'desc' },
    { name: 'Sort content id asc', sort:'id', order: 'asc' },
    { name: 'Sort content id desc', sort:'id', order: 'desc' },
    { name: 'Sort author asc', sort:'userId', order: 'asc' },
    { name: 'Sort author desc', sort:'userId', order: 'desc' },
  ]

  return (
    <Dropdown
      value={ value.name }
      onChange={(e) => onChangeSort(e.value)}
      options={ sort }
      optionLabel="name"
      placeholder="Sort by"
      className="w-full md:w-14rem" />
  )
}

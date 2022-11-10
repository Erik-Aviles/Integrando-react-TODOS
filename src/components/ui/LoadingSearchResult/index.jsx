import React from 'react'
import { Search } from '../TodoIcons/Search';
import './LoadingSearch.css'

export const LoadingSearchResult = ({searchValue}) => {
  return (
    <div className='search'>
        <Search />
        <p>Resultados para: {searchValue}</p>
  </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from '../TodoIcons/Search';
import './LoadingSearch.css'

export const LoadingSearchResult = ({searchValue}) => {
  return (
    <div className='search'>
      <p>Resultados para: {searchValue}</p>
  </div>
  )
}


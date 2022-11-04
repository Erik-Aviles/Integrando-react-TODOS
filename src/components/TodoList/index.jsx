import React from 'react';
import './TodoList.css';

export function TodoList(props){
const renderFunc = props.children || props.render
  return(
    <section className='TodosList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchValue)} 
      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
      <ul>
        {props.children}
      </ul>
    </section>
        
  );      
}

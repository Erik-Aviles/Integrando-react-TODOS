import React from 'react';
import './TodoList.css';

export function TodoList(props){
/* const renderFunc = props.children || props.render */
  return(
    <section className='TodosList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {(!props.loading && !props.error) && props.searchedTodos.map(props.render)}
      <ul>
        {props.children}
      </ul>
    </section>
        
  );      
}

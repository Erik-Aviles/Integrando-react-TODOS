import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoItem } from '../../ui/TodoItem';
import { useTodos } from '../useTodos';
import './Todo.css'

const TodoPage = () => {
  const navegate = useNavigate()
  const {states, stateUpdaters} = useTodos();
  const {loading, searchedTodos } = states;
  const {eliminarTodo, completeTodo } = stateUpdaters;

  const { slug } = useParams();
  console.log(slug)
  const blogPost = searchedTodos.find(post => post.text.toLowerCase().split(" ").join("-") === slug);
  console.log(blogPost)
  

  if (loading) {
    return <p>Cargando ...</p>
  } else {
    return (
      <div className='Main-container'>  
        <h3>Tu busqueda para: {blogPost.text}</h3>

          <TodoItem 
            key={blogPost.id}
            text={blogPost.text}
            completed={blogPost.completed}
            onComplete={() => completeTodo(blogPost.id)}
            onDelete={() => eliminarTodo(blogPost.id)}
            onEdith={() => {
              navegate(
                `/edith/${blogPost.id}`,
                {
                  states: { blogPost }
                }
              ) 
            }}
          />

      </div>

    );
  }
}

export { TodoPage };

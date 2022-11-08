import { useState} from "react";
import { useLocalStorage } from "./useLocalStorage"; 


 function useTodos() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    sincronize: sincronizeTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

 

  const addTodo = text =>{
    const id = todos.length +1;
    const newTodos = [...todos];
    newTodos.unshift({
      completed: false,
      text,
      id,
    });
    saveTodos(newTodos);
  };

  const edithTodo = ( id, newText )=>{
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos)
  };
  const eliminarTodo = ( id )=>{
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const states = {
    todos,
    loading,
    error,
    totalTodos,
    searchValue, 
    searchedTodos,
    completedTodos,
  }
 const stateUpdaters = {
    completeTodo,
    setSearchValue,
    addTodo,
    edithTodo,
    eliminarTodo,
    sincronizeTodos,
  };
  return {
    states,
    stateUpdaters,
  }

}



export {useTodos};
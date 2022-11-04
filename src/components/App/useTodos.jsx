import { useState} from "react";
import { useLocalStorage } from "./useLocalStorage"; 


 function useTodos() {
  const {
    item: todos, 
    saveItem: saveTodos, 
    sincronize: sincronizeTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal ] = useState(false);

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
    const newTodos = [...todos];
    newTodos.unshift({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  const eliminarTodo = text =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    searchValue,
    openModal, 
    searchedTodos,
    completedTodos,
  }
 const stateUpdaters = {
    completeTodo,
    setSearchValue,
    addTodo,
    eliminarTodo,
    setOpenModal,
    sincronizeTodos,
  };
  return {
    states,
    stateUpdaters,
  }
}

export {useTodos};
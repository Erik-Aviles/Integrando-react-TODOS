import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoList } from '../../ui/TodoList';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ErrorSkeleton } from '../../ui/LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../../ui/LoandingSketeton/EmptySkeleton';
import { LoadingSkeleton } from '../../ui/LoandingSketeton/LoadingSkeleton';
import { ChangeAlert }  from "../../ui/ChangeAlert";
import { InputSearch } from "../../ui/InputSearch";
import { TodoMain } from "../../ui/TodoMain";

function HomePage() {

  
  const {states, stateUpdaters} = useTodos();
  const navigate = useNavigate();

  const {
    error,
    searchedTodos,
    loading,
    totalTodos, 
    completedTodos, 
    searchValue,
  } = states;
  
  const {
    completeTodo,
    eliminarTodo,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoMain  loading={loading}>
        
         <InputSearch 
            /*  private= {false} */
             onClick= {() => navigate('/search')}
        /> 

        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        /> 

        <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        completeTodo= {completeTodo}
        eliminarTodo= {eliminarTodo}
        sincronizeTodos= {sincronizeTodos}
        onError={() => <ErrorSkeleton />}
        onLoading= {() => <LoadingSkeleton />}
        onEmptyTodos={() => <EmptySkeleton />}
        /> 
 
        <CreateTodoButton 
          onClick= {() => navigate('/new')}
        />

        <ChangeAlert 
          sincronize={sincronizeTodos} 
        />

      </TodoMain> 
    </React.Fragment>
  );
}

export { HomePage };


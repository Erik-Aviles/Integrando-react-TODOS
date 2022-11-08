import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ErrorSkeleton } from '../../ui/LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../../ui/LoandingSketeton/EmptySkeleton';
import { LoadingSearchResult } from "../../ui/LoadingSearchResult";
import { LoadingSkeleton } from '../../ui/LoandingSketeton/LoadingSkeleton';
import { ChangeAlert }  from "../../ui/ChangeAlert";


function HomePage() {
  
  const {states, stateUpdaters} = useTodos();
  const navigate = useNavigate();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos, 
    completedTodos, 
    searchValue,
  } = states;
  
  const {
    completeTodo,
    eliminarTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;


  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />  
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        onError={() => <ErrorSkeleton />}
        onLoading= {() => <LoadingSkeleton />}
        onEmptySearchResult= {(searchValue) => <LoadingSearchResult searchValue={searchValue}/>}
        onEmptyTodos={() => <EmptySkeleton />}
        render={todo => ( 
          <TodoItem 
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => eliminarTodo(todo.id)}
            onEdith={() => navigate(`/edith/${todo.id}`) }
          />
        )}
        >
    {/*     {todo => ( 
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => eliminarTodo(todo.text)}
          />
        )} */}

      </TodoList>
   
      <CreateTodoButton 
        onClick= {() => navigate('/new')}
      />
      <ChangeAlert 
        sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };


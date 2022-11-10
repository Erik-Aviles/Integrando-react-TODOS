import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ErrorSkeleton } from '../../ui/LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../../ui/LoandingSketeton/EmptySkeleton';
import { LoadingSkeleton } from '../../ui/LoandingSketeton/LoadingSkeleton';
import { ChangeAlert }  from "../../ui/ChangeAlert";
import { InputSearch } from "../../ui/InputSearch";



function HomePage() {
  
  const {states, stateUpdaters} = useTodos();
  const navigate = useNavigate();

  const {
    searchedTodos,
    error,
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
      <TodoHeader  loading={loading}>
        
        <InputSearch 
          onClick= {() => navigate('/search')}
        />

        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
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
        onEmptyTodos={() => <EmptySkeleton />}
        render={todo => ( 
          <TodoItem 
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => eliminarTodo(todo.id)}
            onEdith={() => {
              navigate(
                `/edith/${todo.id}`,
                {
                  states: { todo }
                }
              ) 
            }}
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


import React from "react";
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodoFormulario } from '../../ui/TodoFormulario';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { ErrorSkeleton } from '../../ui/LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../../ui/LoandingSketeton/EmptySkeleton';
import { LoadingSearchResult } from "../../ui/LoadingSearchResult";
import { LoadingSkeleton } from '../../ui/LoandingSketeton/LoadingSkeleton';
import { ChangeAlert }  from "../../ui/ChangeAlert";
import { Link } from "react-router-dom";


function HomePage() {
  
  const {states, stateUpdaters} = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos, 
    completedTodos, 
    openModal, 
    searchValue,
  } = states;
  
  const {
    completeTodo,
    setOpenModal,
    addTodo,
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
            onEdith={() => {<Link to={'/edith:id'} />}}
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

      {!!openModal && (
        <Modal>
          <TodoFormulario  
            totalTodos={totalTodos}
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal} 
      />
      <ChangeAlert 
        sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };


import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodoFormulario } from '../TodoFormulario';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal';
import { ErrorSkeleton } from '../LoandingSketeton/ErrorSkeleton';
import { EmptySkeleton } from '../LoandingSketeton/EmptySkeleton';
import { LoadingSearchResult } from "../LoadingSearchResult";
import { LoadingSkeleton } from '../LoandingSketeton/LoadingSkeleton';
import { ChangeAlert }  from "../ChangeAlert";


function App() {
  
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
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => eliminarTodo(todo.text)}
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

export default App;


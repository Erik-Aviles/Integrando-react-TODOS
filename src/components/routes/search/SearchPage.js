import { useTodos } from '../useTodos';
import { LoadingSearchResult } from '../../ui/LoadingSearchResult';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { ErrorSkeleton } from '../../ui/LoandingSketeton/ErrorSkeleton';
import { LoadingSkeleton } from '../../ui/LoandingSketeton/LoadingSkeleton';
import { EmptySkeleton } from '../../ui/LoandingSketeton/EmptySkeleton';
import { TodoItem } from '../../ui/TodoItem';
import { useNavigate} from 'react-router-dom';

const SearchPage = () => {
  const {states, stateUpdaters} = useTodos();
  const { error, loading, searchedTodos, searchValue, totalTodos} = states;
  const {eliminarTodo, completeTodo, setSearchValue} = stateUpdaters;
  const navigate = useNavigate();

  
  return (
    <>
      <TodoSearch
        loading = {loading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onEmptySearchResult= {(searchValue) => <LoadingSearchResult searchValue={searchValue}/>}
      />

      { searchValue && <TodoList
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

      </TodoList> }

    </>

  );
}
  
  export { SearchPage };
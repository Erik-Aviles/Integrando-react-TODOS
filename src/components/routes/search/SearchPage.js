import { useTodos } from '../useTodos';
import { LoadingSearchResult } from '../../ui/LoadingSearchResult';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Search } from '../../ui/TodoIcons/Search';
import './SearchPage.css'

const SearchPage = () => {
  


  const {states, stateUpdaters } = useTodos();
  const {error, totalTodos, loading , searchedTodos, searchValue } = states;
  const {setSearchValue, completeTodo, eliminarTodo } = stateUpdaters;

 

  return (
    <div className='Main-conteiner'>
      <TodoSearch
          loading = {loading}
          searchValue={searchValue}
          setSearchValue={setSearchValue}

          />
   
      <div style={{display: 'flex', alignItems: 'center'}}>
      <Search /> <h2>Buscar</h2>
      </div>
      {searchValue && LoadingSearchResult({searchValue})} 
    
      {searchValue && 
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchValue={searchValue}
          totalTodos={totalTodos}
          completeTodo= {completeTodo}
          eliminarTodo= {eliminarTodo}
        />
      }
 

    </div>

  );
}
  
  export { SearchPage };
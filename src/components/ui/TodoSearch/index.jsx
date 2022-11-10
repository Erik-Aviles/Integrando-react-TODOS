import { useParams } from 'react-router-dom';
import '../../routes/search/SearchPage.css';
import { useTodos } from '../../routes/useTodos';
import { TodoItem } from '../TodoItem';

function TodoSearch( {searchValue, setSearchValue, loading, onEmptySearchResult, render}) {

  const { slug } = useParams();
  const {states, stateUpdaters} = useTodos();
  const {searchedTodos}= states;
  const {completeTodo, eliminarTodo}= stateUpdaters;

  const todoitems= searchedTodos.find(todo => todo.text.toLowerCase().split(" ").join("+") === slug);
  console.log(todoitems)
    
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
  
    return (
     <div>
       <input
        className="TodoSearch"
        placeholder="Búsqueda de tarea"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
       {searchValue && onEmptySearchResult(searchValue)} 

        
     </div>
    );
  }
  
  export { TodoSearch };
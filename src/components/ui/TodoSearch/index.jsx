import '../../routes/search/SearchPage.css';


function TodoSearch( {searchValue, setSearchValue, onEmptySearchResult, }) {
   
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
      />
       {searchValue && onEmptySearchResult(searchValue)} 

        
     </div>
    );
  }
  
  export { TodoSearch };
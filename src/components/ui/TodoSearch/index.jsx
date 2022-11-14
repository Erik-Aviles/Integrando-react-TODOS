import '../../routes/search/SearchPage.css';


function TodoSearch( {searchValue, setSearchValue, }) {
   
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);

    };

 
    return (
     <div>
      
       <input
        className="TodoSearch"
        type='search'
        placeholder="Búsqueda de tarea"
        value={searchValue}
        onChange={onSearchValueChange}

      />
    </div> 
    );
  }
  
  export { TodoSearch };
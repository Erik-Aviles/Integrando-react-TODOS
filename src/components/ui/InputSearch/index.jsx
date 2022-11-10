import '../../routes/search/SearchPage.css';


function InputSearch({onClick}){
  return (
    
    <input 
      className='TodoSearch'
      placeholder="Búsqueda de tarea"
      onClick={onClick}
    />
  );
}
  
export { InputSearch };
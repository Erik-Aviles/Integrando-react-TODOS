import { useReducer } from "react";
import { useEffect } from "react";

export function useLocalStorage(itemName, inicialValue) {

  const [ state, dispatch ] = useReducer(reducer, inicialState({inicialValue}));  
  const {
    sincronizedItem,
    loading,
    error,
    item,
   } = state;

  const onError = (error) => dispatch({ type: actionTypes.error, payload: error, });
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item,});
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item,});
  const onSincronize = () => dispatch({type: actionTypes.sincronized,});
 
 
  useEffect(() => {
    setTimeout(() => { 
      try {
        // Persistencia de datos en local storage -->
        const localStorageItem = localStorage.getItem(itemName);
        let parsetItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsetItem= inicialValue;
        } else {
          parsetItem= JSON.parse(localStorageItem);
        }
        onSuccess(parsetItem);
      } catch (error) { 
       onError(error);
      }
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizedItem]);
  

  // <----

  // Guarda la informacion en el local storage aunque se recargue la pagina
  const saveItem= (newItem) => { 
    try {
      const strinngifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strinngifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error); 
    }
  };

  
  const sincronize = () => {
    onSincronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize, 
  };

}

// HERRAMIENTAS PARA useREDUCER

const inicialState = ({inicialValue}) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  item: inicialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: 'SAVE',
  sincronized: 'SINCRONIZE',
}

const reducerObjet = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error:  true,
  },
  
  [actionTypes.success]: {
    ...state,
    error: false,
    loading:  false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },

  [actionTypes.sincronized]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
  

});

const reducer = (state, action) => {
  return reducerObjet(state, action.payload)[action.type] || state;
};
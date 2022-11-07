
import React from "react";
import './CreateTodoButtom.css'

function CreateTodoButton({setOpenModal}){
  
  const onClickButton = () => {
    setOpenModal(changeState => !changeState );
  };
  
	return(
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button> 
	);
}

export { CreateTodoButton };
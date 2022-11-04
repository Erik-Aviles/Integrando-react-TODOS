import React from "react";
import { Delete } from "../TodoIcons/Delete";
import { Check } from "../TodoIcons/Check";
import './TodoItem.css'

export function TodoItem(props){

  return(
    <li className="TodoItem">
      <Check
        completed= {props.completed} 
        onComplete={props.onComplete}
      />

      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <Delete
        onDelete={props.onDelete}
      />
        
    </li>
  );
}

import React from "react";
import { Delete } from "../TodoIcons/Delete";
import { Check } from "../TodoIcons/Check";
import { Edith } from "../TodoIcons/Edith";

import './TodoItem.css'
import {  NavLink } from "react-router-dom";


export function TodoItem(props){

  return(
   
    <li  className="TodoItem"  > 
    
  
      <Check
        completed= {props.completed} 
        onComplete={props.onComplete}
      />
        <NavLink style={{width:"100%", paddingLeft: '30px', textDecoration: "none"}} to={`/search/${props.text.toLowerCase().split(" ").join("-")}`}>
      <p 
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
    
      </NavLink>
      <Delete
        onDelete={props.onDelete}
      />
      <Edith
        onEdith={props.onEdith}
      />

    </li>

  );
}

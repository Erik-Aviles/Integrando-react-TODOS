import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai"; 
import { AiFillEdit } from "react-icons/ai"; 
import './TodoIcons.css'

const iconTypes = {
  "check": color => (
    <AiFillEye className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "incheck": color => (
    <AiFillEyeInvisible className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <AiOutlineDelete className="Icon-svg Icon-svg--delete" fill={color} />
  ),
  "edith": color => (
    <AiFillEdit className="Icon-svg Icon-svg--edith" fill={color} />
  ),
};

export function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}
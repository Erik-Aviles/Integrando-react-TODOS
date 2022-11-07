import React from "react";
import './LoadingSkeleton.css'

export function LoadingSkeleton() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completedIcon"></span>
      <p className="LoadingTodo-text">Cargando Tareas...</p>
      <span className="LoadingTodo-deletedIcon"></span>
    </div>
  );
}
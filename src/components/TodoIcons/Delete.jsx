import React from 'react';
import { TodoIcon } from './index';

export function Delete({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

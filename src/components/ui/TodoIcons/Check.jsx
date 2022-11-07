import React from 'react';
import { TodoIcon } from './';

export function Check({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

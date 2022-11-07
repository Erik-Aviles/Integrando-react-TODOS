import React from 'react';
import { TodoIcon } from './index';

export function Edith({ onEdith }) {
  return (
    <TodoIcon
      type="edith"
      onClick={onEdith}
    />
  );
}

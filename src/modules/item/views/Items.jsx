import React from 'react';

// add item component
import ItemAdd from '../components/ItemAdd';
// items listing component
import ItemsList from '../components/ItemsList';

export const Items = () => {
  return (
    <div>
      <ItemAdd />
      <ItemsList />
    </div>
  );
};

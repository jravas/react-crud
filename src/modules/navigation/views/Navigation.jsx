import React from 'react';
import { Link } from 'react-router-dom';

// router paths
import { HOME, ITEMS } from '../../../main/constants/routes';

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to={HOME}>Home</Link>
      </li>
      <li>
        <Link to={ITEMS}>Items</Link>
      </li>
    </ul>
  );
};

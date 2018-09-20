import { ADD_ITEM, FETCH_ITEMS } from './types';
import { Item } from '../model/item';
// generating items id
import cuid from 'cuid';

// add item action
export const addItem = item => async dispatch => {
  const itemId = cuid();
  dispatch({
    type: ADD_ITEM,
    payload: Item(itemId, item)
  });
};

// get items action
export const fetchItems = () => async dispatch => {
  dispatch({
    type: FETCH_ITEMS
  });
};

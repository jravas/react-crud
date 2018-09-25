import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  UPDATE_ITEM
} from './types';
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

// delete item action
export const deleteItem = item => async dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: item
  });
};

// get items action
export const fetchItems = () => async dispatch => {
  dispatch({
    type: FETCH_ITEMS
  });
};

// get item by id
export const fetchItem = id => async dispatch => {
  dispatch({
    type: FETCH_ITEM,
    payload: id
  });
};

// update item
export const updateItem = (id, item) => async dispatch => {
  dispatch({
    type: UPDATE_ITEM,
    payload: Item(id, item)
  });
};

import { ADD_ITEM, FETCH_ITEMS } from './types';

// add item action
export const addItem = item => async dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

// get items action
export const fetchItems = () => async dispatch => {
  dispatch({
    type: FETCH_ITEMS
  });
};

import { ADD_ITEM, FETCH_ITEMS } from './types';

export const itemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    // item adding reducer
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    // items geting reducer
    case FETCH_ITEMS: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

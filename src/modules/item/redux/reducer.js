import {
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  UPDATE_ITEM
} from './types';

export const itemsReducer = (state = { items: [], item: null }, action) => {
  switch (action.type) {
    // item adding reducer
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    // item removing reducer
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    }
    // items geting reducer
    case FETCH_ITEMS: {
      return {
        ...state
      };
    }
    // get item by id reducer
    case FETCH_ITEM: {
      return {
        ...state,
        item: state.items.find(item => item.id === action.payload)
      };
    }
    // item updating reducer
    case UPDATE_ITEM: {
      // find index for item to update
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items[itemIndex] = action.payload;
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

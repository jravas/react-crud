import { combineReducers } from 'redux';
import { itemsReducer } from '../../modules/item/redux/reducer';

const rootReducer = combineReducers({
  itemsState: itemsReducer
});
export default rootReducer;

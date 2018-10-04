import { combineReducers } from 'redux';
import modelsReducer from './modelsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  models: modelsReducer,
})

export default rootReducer;

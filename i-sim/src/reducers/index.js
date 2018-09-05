import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import ModelsReducer from './reducer_models';

const rootReducer = combineReducers({
  models: ModelsReducer
})

export default rootReducer;

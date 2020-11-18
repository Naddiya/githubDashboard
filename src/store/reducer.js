import { combineReducers } from 'redux';
import appReducer from 'src/store/reducers/appReducer';
import userReducer from 'src/store/reducers/userReducer';

const reducers = {
  appReducer,
  userReducer,
};

export default combineReducers(reducers);

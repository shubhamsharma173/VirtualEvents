import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import todoApp from './todo/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  todoApp,
});

export default reducers;

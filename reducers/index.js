import { combineReducers } from 'redux';
import data from './data_reducer';
import nav from './nav_reducer';
export default combineReducers({ data, nav });

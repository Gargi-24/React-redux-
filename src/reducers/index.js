import { combineReducers } from 'redux';
import employee from './employee_reducer';
import search from './search_reducer';
import selectedEmployee from './root_reducer';

export default combineReducers({ employee, search, selectedEmployee })
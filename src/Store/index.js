import { legacy_createStore as createStore } from 'redux';
import { toDoReducer } from './ToDo/reducer';

export const store = createStore(toDoReducer);
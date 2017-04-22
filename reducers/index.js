import todos from './todo';
import visibleTodoFilter from './visibleTodoFilter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    todos: todos,
    visibleTodoFilter: visibleTodoFilter
})

export default todoApp;

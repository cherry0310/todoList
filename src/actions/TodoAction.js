import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from '../constant/actionTypes';

export const addTodoAction = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
}

export const toggleTodoAction = (index) => {
    return {
        type: TOGGLE_TODO,
        index: index
    }
}

export const setFilterAction = (filter) => {
    return {
        type: SET_VISIBLE_FILTER,
        filter: filter
    }
}

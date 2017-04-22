let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    }
}

export const setVisibility = (text) => {
    return {
        type: 'SET_VISIBILITY',
        filter: filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}

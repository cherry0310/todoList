import { ADD_TODO, TOGGLE_TODO, SET_VISIBLE_FILTER } from '../constant/actionTypes';

let initialState = {
    visibleTodoFilter: 'SHOW_ALL',
    todos: []
}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos:
                    state.todos.map((item,index) => {
                        if(index === action.index){
                            return Object.assign({}, item, {
                                completed: !item.completed
                            })
                        }else{
                            return item;
                        }
                    })
            })
        case SET_VISIBLE_FILTER:
            return Object.assign({}, state, {
                visibleTodoFilter: action.filter
            })
        default:
            return state;
    }
}

export default todoReducer

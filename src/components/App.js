import React, { Component } from 'react';
import InputForm from './InputForm';
import { addTodoAction, toggleTodoAction, setFilterAction } from '../actions/TodoAction';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import Footer from './Footer';
import { VISIBLE_FILTERS } from '../constant/actionTypes';

class App extends Component {

    render(){
        let { addTodo, toggleTodo, todos, visibleTodoFilter, setFilter } = this.props;
        todos = selectTodos(todos, visibleTodoFilter);
        return(
            <div>
                <InputForm handleAddClick={ addTodo } />
                <TodoList todos={ todos } handleToggleClick={ toggleTodo } />
                <Footer filter={ visibleTodoFilter } handleFilterChange={ setFilter } />
            </div>
        )
    }
}

function selectTodos(todos, filterName){
    switch(filterName){
        case VISIBLE_FILTERS.SHOW_COMPLETED:
            return todos.filter((item)=>item.completed)
        case VISIBLE_FILTERS.SHOW_TODO:
            return todos.filter((item)=> !item.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        visibleTodoFilter: state.visibleTodoFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodoAction(text)),
        toggleTodo: (index) => dispatch(toggleTodoAction(index)),
        setFilter: (filter) => dispatch(setFilterAction(filter))
    }
}

export default App = connect(mapStateToProps,mapDispatchToProps)(App)

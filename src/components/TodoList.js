import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        let { todos, handleToggleClick } = this.props;

        return(
            <ul>
                {
                    todos.map((item,index)=>{
                        return(
                            <Todo
                                key={ index }
                                index={ index }
                                item={ item }
                                handleToggleClick={ handleToggleClick }
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

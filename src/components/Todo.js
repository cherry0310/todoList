import React, { Component } from 'react';

export default class Todo extends Component {


    render(){
        let { index, item, handleToggleClick } = this.props;

        return(
            <li
                onClick={ () => handleToggleClick(index) }
                style={{textDecoration: item.completed===true? "line-through" : "none"}}
                >{ item.text }</li>
        )
    }
}

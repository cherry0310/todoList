import React, { Component } from 'react';

export default class InputForm extends Component {
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        let value = this.refs.input.value.trim();
        let handleAddClick = this.props.handleAddClick;
        handleAddClick(value);
    }


    render(){
        return(
            <div>
                <input type="text" placeholder="请输入待办事项" ref="input" />
                <button onClick={ this.handleButtonClick }>添加</button>
            </div>

        )
    }
}

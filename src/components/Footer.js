import React, { Component } from 'react';
import '../sources/Footer.css';
import { VISIBLE_FILTERS } from '../constant/actionTypes';

export default class Footer extends Component {

    render(){
        let { filter, handleFilterChange } = this.props;

        return(
            <p>
            {
                Object.keys(VISIBLE_FILTERS).map((item,index) => {
                    if(item === filter){
                        return (
                            <span key={index}>{item}</span>
                        )
                    }else{
                        return(
                            <span
                                key={index}
                                className="unselect"
                                onClick={() => handleFilterChange(item)}
                                >{item}</span>
                        )
                    }
                })
            }

            </p>
        )
    }
}

/**
 * Created by maciej on 15.01.18.
 */
import React, { Component } from 'react';

const taskStyle = {
    done: {
        color: "blue",
        textDecoration: "line-through"
    },
    unDone: {}
};



class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            done: false
        }
    }

    handleTaskStatusChange = (e) => {
        this.setState({
            done: e.target.done
        })
    };


    render(){
        return(
            <div>
                <input type="checkbox" onChange={this.handleTaskStatusChange}/>
                <span style={this.state.done ? taskStyle.done : taskStyle.unDone}>{this.props.label}</span>
            </div>
        )
    }


}

export default Task;
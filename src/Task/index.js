/**
 * Created by maciej on 15.01.18.
 */
import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Checkbox from 'material-ui/Checkbox';
import {ListItem} from 'material-ui/List'


const taskStyle = {
  done: {
    color: "blue",
    textDecoration: "line-through"
  },
  unDone: {}
};

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  handleTaskStatusChange = () => {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    return (
      <ListItem>
          <Checkbox onChange={this.handleTaskStatusChange}></Checkbox>
          <span style={this.state.done ? taskStyle.done : taskStyle.unDone}>{this.props.task.name}</span>
          <IconButton aria-label="Delete" color="primary">
            <DeleteIcon onClick={() => this.props.onDelete(this.props.task.id)}/>
          </IconButton>
      </ListItem>
    )
  }
}

export default Task;
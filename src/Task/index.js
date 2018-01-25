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

  handleTaskStatusChange = (e) => {
    this.setState({
      done: e.target.checked
    })
  };

  render() {
    return (
      <ListItem>
        <div>
          <Checkbox onChange={this.handleTaskStatusChange}></Checkbox>
          <span style={this.state.done ? taskStyle.done : taskStyle.unDone}>{this.props.name}</span>
          <IconButton aria-label="Delete" color="primary">
            <DeleteIcon onClick={() => this.props.onDelete(this.props.name)}/>
          </IconButton>
        </div>
      </ListItem>
    )
  }
}

export default Task;
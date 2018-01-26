/**
 * Created by maciej on 15.01.18.
 */
import React from 'react';

import Task from '../Task';
import List from 'material-ui/List';


const TasksList = (props) => (
  <List>
    {props.tasks.filter((elem) => elem.toUpperCase().indexOf(props.searchPhrase.toUpperCase()) !== -1)
    .map((taskName, index) => (
      <Task key={index} name={taskName} onDelete={props.onDelete}/>))}
  </List>
);

export default TasksList;
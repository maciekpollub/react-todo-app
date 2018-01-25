/**
 * Created by maciej on 15.01.18.
 */
import React from 'react';

import Task from '../Task';


const TasksList = (props) => (
  props.tasks.filter((elem) => elem.toUpperCase().indexOf(props.searchPhrase.toUpperCase()) !== -1)
    .map((taskName, index) => (
      <Task key={index} name={taskName} onDelete={props.onDelete}/>))
);

export default TasksList;
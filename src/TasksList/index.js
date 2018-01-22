/**
 * Created by maciej on 15.01.18.
 */
import React from 'react';

import Task from '../Task';

const TasksList = (props) => (
    props.tasks.filter((elem) => elem.toUpperCase().indexOf(props.searchPhrase.toUpperCase()) !== -1)
        .map((elem, index) => (
            <Task key={index} label={elem} />))
);

export default TasksList;
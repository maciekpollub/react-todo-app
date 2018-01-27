/**
 * Created by maciej on 25.01.18.
 */
import { database } from './firebase.js';



//first, we need action creators
const ADD_TASK = 'ADD_TASK';
const SEARCH_TASK = 'SEARCH_TASK';
const DELETE_TASK = 'DELETE_TASK';

const POPULATE_TASKS='POPULATE_TASKS';

export const createAddingAction = task => dispatch => {
  database.ref('/tasks')
    .push({
      name: task
    });
};

export const createSearchingAction = phrase => ({
  type: SEARCH_TASK,
  phrase: phrase
});

export const createDeletingAction = taskId => dispatch => {
  database.ref('/tasks/taskId}').remove()
};

export const createPopulatingAction = tasks => ({
  type: POPULATE_TASKS,
  tasks: tasks
});

export const createInitializingAction = () => dispatch => {
  database.ref('/tasks')
    .on('value', (snapshot) => {
      const firebaseData = Object.entries(snapshot.val() || {});
      const applicationData = firebaseData.map(([id, value]) => {
        value.id = id;
        return value;
      });
      dispatch(createPopulatingAction(applicationData))
    });
};





//further, we need initial state, which will be used in reducer function
const INITIAL_STATE = {
  query: '',
  tasks: []
};


export const meetReducer = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case ADD_TASK:
      return{
        ...state,
        tasks: state.tasks.concat(action.task)
      };
    case SEARCH_TASK:
      return{
        ...state,
        query: action.phrase
      };
    case POPULATE_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
    case DELETE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter( task => task !==action.task)
      };
    default:
      return state;
  }
};


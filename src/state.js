/**
 * Created by maciej on 25.01.18.
 */
//first, we need action creators
const ADD_TASK = 'ADD_TASK';
const SEARCH_TASK = 'SEARCH_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const createAddingAction = task => ({
  type: ADD_TASK,
  task: task
});

export const createSearchingAction = phrase => ({
  type: SEARCH_TASK,
  phrase: phrase
});

export const createDeletingAction = task => ({
  type: DELETE_TASK,
  task: task
});

//further, we need initial state, which will be used in reducer function
const INITIAL_STATE = {
  query: '',
  tasks: ['write todo react application', 'revise material form the course']
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
    case DELETE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter( task => task !==action.task)
      };
    default:
      return state;
  }
};


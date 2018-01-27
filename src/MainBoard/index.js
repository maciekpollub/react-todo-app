/**
 * Created by maciej on 15.01.18.
 */
import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import TextField from  'material-ui/TextField';
import Button from 'material-ui/Button';
import TasksList from '../TasksList';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';


import { connect } from 'react-redux';
import { createAddingAction, createSearchingAction, createDeletingAction, createInitializingAction} from '../state.js';



//we want to inject the states and methods to the props object of MainBoard component...
const mapStateToProps = state => ({
  piTasksList: state.tasksReducers.tasks,
  piQuery: state.tasksReducers.query
});
const mapDispatchToProps = dispatch => ({
  piAddTask: task => dispatch(createAddingAction(task)),//pi - abbreviation of 'props injection';)
  piSearchPhrase: phrase => dispatch(createSearchingAction(phrase)),
  piDeleteTask: taskId => dispatch(createDeletingAction(taskId)),
  piInitializeTasks: () => dispatch(createInitializingAction())
});



const styles = theme => ({
  root: {
    flexGrow: 5,
    backgroundColor: 'white',
    padding: '3%',
    alignItems: 'center',
    borderRadius: 10
  },
  paper: {
    padding: 30,
    color: '#9E9E9E',
    borderRadius: 10
  },
  list: {
    justifyContent: 'center',
    margin: 'normal'
  },
  gridCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gridFlexEnd: {
    justifyContent: 'flex-end'
  }
});


class MainBoard extends Component {

  constructor(props){
    super(props);
    this.state = {
      taskPhrase: ''
    }
  };

  componentWillMount() {
    this.props.piInitializeTasks();
  };

  handleTaskPhraseChange = (e) => {
    this.setState({
      taskPhrase: e.target.value
    });
  };

  handleSearchPhraseChange = (e) => {
    this.props.piSearchPhrase(e.target.value);
  };

  handleSubmition = (e) => {
    this.props.piAddTask(this.state.taskPhrase);
    this.setState({
      taskPhrase: ''
    });
    e.preventDefault();
  };

  handleDeletion = (taskToDelete) => {
    this.props.piDeleteTask(taskToDelete);
  };

  render() {
    const {classes} = this.props;
    return (
      <Card raised elevation="12">
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs={12}>
          <Grid container className={classes.gridCenter}>
            <TextField id="task"
                       label="Task"
                       value={this.state.taskPhrase}
                       onChange={this.handleTaskPhraseChange}
                       margin="normal"
            />
            <Button type="submit" raised color="primary" justify="center"
                    onClick={this.handleSubmition}>Add task</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.gridFlexEnd}>
            <TextField id="search"
                       label="Search"
                       onChange={this.handleSearchPhraseChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" className={classes.gridCenter}>
            <Typography
              type="display1"
              align="center"
            >My tasks</Typography>
            <Paper className={classes.gridCenter} elevation="6">
              <TasksList searchPhrase={this.props.piQuery}
                         tasks={this.props.piTasksList}
                         onDelete={this.handleDeletion}
                         align="center"
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      </Card>
    )
  }
}
MainBoard = connect(mapStateToProps, mapDispatchToProps)(MainBoard);
export default withStyles(styles)(MainBoard);

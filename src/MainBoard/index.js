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
    justifyContent: 'flex-end',
    padding: 30
  }
});


class MainBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskPhrase: '',
      searchPhrase: '',
      tasks: ['write todo application...', 'revise material from the course...']
    }
  }

  handleTaskPhraseChange = (e) => {
    this.setState({
      taskPhrase: e.target.value
    });
  };

  handleSearchPhraseChange = (e) => {
    this.setState({
      searchPhrase: e.target.value
    });
  };

  handleSubmition = (e) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.taskPhrase),
      taskPhrase: ''
    });
    e.preventDefault();
  };

  handleDeletion = (taskToDelete) => {
    this.setState({
      tasks: this.state.tasks.filter(task => taskToDelete !== task)
    });
  };

  render() {
    const {classes} = this.props;
    return (
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
          <Grid container className={classes.gridCenter}>
            <Paper className={classes.gridCenter} elevation="6">

              <h1 align="center">My tasks</h1>
              <TasksList searchPhrase={this.state.searchPhrase}
                         tasks={this.state.tasks}
                         onDelete={this.handleDeletion}
                         align="center"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.gridFlexEnd}>
            <TextField id="search"
                       label="Search"
                       onChange={this.handleSearchPhraseChange}
                       margin="normal"
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(MainBoard);
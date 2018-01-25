import React, {Component} from 'react';
import MainBoard from './MainBoard'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    flexGrow: 5,
    margin: 10,
    color: 'black'
  },
  paper: {
    padding: '5%',
    color: 'black',
    backgroundColor: "#90CAF9",


  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  typo: {
    fontSize: 34,
    letterSpacing: 3,
    textAlign: "center",
    color: "black",
    paddingBottom: 15

  }
});

class App extends Component {

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.paper} elevation="10">
        <Typography className={classes.typo}>
          ToDo App
        </Typography>
        <MainBoard />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
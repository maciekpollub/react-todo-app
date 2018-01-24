import React, { Component } from 'react';
import MainBoard from './MainBoard'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = theme => ({
    root: {
        flexGrow: 5,
        margin: 100,
    },
    paper: {
        padding: 16,
        color:'#455A64'

    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
    }
});


class App extends Component{

  render() {
      const { classes } = this.props;
    return (
      <Paper className={classes.paper} elevation="4">
        <Typography type="display1" align="center" color="primary" >
          ToDo Application</Typography>
        <MainBoard />
      </Paper>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
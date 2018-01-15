/**
 * Created by maciej on 15.01.18.
 */
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from  'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

class MainBoard extends Component {

    constructor(props){
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
    }
    handleSearchPhraseChange = (e) => {
        this.setState({
            searchPhrase: e.target.value
        });
    }
    handleSubmit = (e) => {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        e.preventDefault();
    }

    render(){
        return(
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <TextField id="task"
                                   label="Task"
                                   value={this.state.taskPhrase}
                                   onChange={this.handleTaskPhraseChange}
                                   margin="normal"/>
                        <Button type="submit" raised color="primary" onClick={this.handleSubmit}>Add task</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="search"
                               label="Search"
                               onChange={this.handleSearchPhraseChange}
                               margin="normal"/>
                </Grid>
                <Grid item xs={12}>
                    <h1>My tasks</h1>
                    <TaskList query={this.state.searchPhrase} tasks={this.state.taskPhrase}/>
                </Grid>
            </Grid>
        )
    }
}
export default MainBoard;
}

export default MainBoard;
import React, { Component } from 'react';

class TodoList extends Component{
    state = {
        todo : ''
    }

    changeFnc = (e) => {
        this.setState({
            todo : e.target.value
        })
    }

    submitFnc = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            todo : ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitFnc}>
                    <input type="text" name="addDo" onChange={this.changeFnc} value={this.state.todo}/>
                    <input type="submit" value="+"/>
                </form>
            </div>
        )
    }
}

export default TodoList;
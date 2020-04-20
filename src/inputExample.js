import React, { Component } from 'react';

class InputExample extends Component {
    state = {
        name : '',
        take : false
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.catch){
            this.tkFnc();
            return false; 
        }else{
            return true;
        }
    }
    // componentWillUpdate(nextProps, nextState){
        // console.log(nextState)
    // }
    // componentDidUpdate(prevProps, prevState){
        // console.log(prevState)
    // }

    tkFnc = () => {
        this.setState({
            take : 'good'
        })
    }

    changeFnc = (e) => {
        this.setState({
            name : e.target.value
        })
        if ( this.state.name === 'test') { 
            this.setState({
                catch : true
            })
        }else{
            this.setState({
                catch : false
            })
        }
    }

    render(){
        return (
            <form>
                <input placeholder='name' value={this.state.name} onChange={this.changeFnc}/>
                <div>{this.state.name}</div>
                <div>{this.state.take}</div>
            </form>
        )
    }
}

export default InputExample;
import React, { Component } from 'react';

class PracticeArrayInfo extends Component{
    static defaultProps = {
        info: {
            name : '이름',
            phone : '010-0000-0000',
            id : 0
        }
    }

    state = {
        editing : false,
        name : '',
        phone : ''
    }

    handleRemove = () => {
        const { info, remove } = this.props;
        remove(info.id)
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({
            editing : !editing
        })
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [ name ] : value
        })
    }

    componentDidUpdate(prevProps, prevState){
        const { info, update } = this.props;
        if( !prevState.editing && this.state.editing){
            this.setState({
                name : info.name,
                phone : info.phone
            })
        }

        if( prevState.editing && !this.state.editing){
            update(info.id,{
                name : this.state.name,
                phone : this.state.phone
            })
        }
    }

    render(){
        const { editing } = this.state;
        if(editing){
            return (
                <div>
                    <input type="text" value={this.state.name} name="name" placeholder="name" onChange={this.handleChange}/>
                    <input type="text" value={this.state.phone} name="phone" placeholder="phone" onChange={this.handleChange}/>
                    <button onClick={this.handleToggleEdit}>수정</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const { name, phone, id} = this.props.info
        return(
            <div>
                <span><b>{name}</b></span>
                <span>{phone}</span>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PracticeArrayInfo;
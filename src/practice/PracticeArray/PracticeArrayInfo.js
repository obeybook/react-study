import React, { Component } from 'react';

class PracticeArrayInfo extends Component{
    static defaultProps = {
        info: {
            name : '이름',
            phone : '010-0000-0000',
            id : 0
        }
    }

    render(){
        const { name, phone, id} = this.props.info
        return(
            <div>
                <span><b>{name}</b></span>
                <span>{phone}</span>
            </div>
        )
    }
}

export default PracticeArrayInfo;
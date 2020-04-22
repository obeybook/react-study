import React, { Component } from 'react';
import PracticeArrayInfo from './PracticeArrayInfo';

class PracticeArrayInfoList extends Component{
    static defaultProps = {
        data : []
    }

    render(){
        const { data } = this.props
        const list = data.map(
            info => (<PracticeArrayInfo key={info.id} info={info} />)
        )
        return(
            <div>{list}</div>
        )
    }
}

export default PracticeArrayInfoList;
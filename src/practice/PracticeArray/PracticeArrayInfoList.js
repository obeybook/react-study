import React, { Component } from 'react';
import PracticeArrayInfo from './PracticeArrayInfo';

class PracticeArrayInfoList extends Component{
    static defaultProps = {
        data : []
    }

    render(){
        const { data , onRemove , onUpdate} = this.props
        const list = data.map(
            info => (<PracticeArrayInfo key={info.id} info={info} remove={onRemove} update={onUpdate} />)
        )
        return(
            <div>{list}</div>
        )
    }
}

export default PracticeArrayInfoList;
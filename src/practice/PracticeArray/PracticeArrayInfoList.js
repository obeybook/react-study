import React, { Component } from 'react';
import PracticeArrayInfo from './PracticeArrayInfo';

class PracticeArrayInfoList extends Component{
    static defaultProps = {
        data : []
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.data)
        console.log(this.props.data)
        console.log(nextProps.data !== this.props.data)
        return nextProps.data !== this.props.data
    }

    render(){
        console.log("asd")
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
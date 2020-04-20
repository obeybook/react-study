import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('Error'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component{
    state = {
        number : 0
    }
    
    /* ------- 컴포넌트 초기 생성 ------- */
    /* ------- 컴포넌트 초기 생성 ------- */
    /* 컴포넌트 생성자 함수 - 컴포넌트가 새로 만들어질 때 이 함수 호출*/
    constructor(props){ 
        super(props);
        console.log('constructor');
    }

    /* 컴포넌트가 화면에 나타나기 직전에 호출 */
    componentWillMount(){ 
        console.log('componentWillMount (deprecated)');
    }

    /* 컴포넌트가 화면에 나타났을때 호출 */
    /* 이곳에서 외부 라이브러리 연동, 데이터 요청 ex)fetch DOM의 속성을 읽거나 변경 작업 진행 */
    componentDidMount(){ 
        console.log('componentDidMount');
    }

    /* ------- 컴포넌트 업데이트 ------- */
    /* ------- 컴포넌트 업데이트 ------- */
    /* Virtual DOM 리렌더링 제어 ex) true -> shouldComponentUpdate() 호출*/
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    /* shouldComponentUpdate()가 true 반환했을때만 호출 */
    /* 애니메이션 효과 초기화, 이벤트 리스너 제거 작업 */
    /* 이 함수가 호출 되고나면 render() 호출 */
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    /* render() 호출하고 다음에 호출 */
    /* 이 시점에서 this.props,state 변경되어있음 -> 그전 값 prevProps, prevState */
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number : number + 1
        })
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number : number - 1
            })
        )
    }
    
    render(){
        if (this.state.error) return (<h1>error</h1>)
        return (
            <div>
                <h1>숫자센다</h1>
                <div>값 : {this.state.number}</div>
                { this.state.number === 4 && <Problematic/> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;
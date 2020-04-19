import React from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name : '오용훈'
//     }
//     render() {
//         return (
//             <div>
//                 인사박아라 <b>{this.props.name}</b>이다.
//             </div>
//         )
//     }
// }

const MyName = ({ name }) => {
    return (
        <div>
            인사박아라. <b>{name}이다.</b>
        </div>
    )
}

export default MyName;
import React, { Component } from 'react';
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.firstname }, { props.lastname }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;
    
// class SomeClassComponent extends Component {
//     state = {
//         count: this.props.age 
//       };
//     handleClick = () => {
//         this.setState((prevState, { count }) => ({
//           count: prevState.count + 1
//         }));
//       };
//     render() {
//     const { firstname, lastname, age, hairColor } = this.props;
 
//         return <div>

//  <h1> { firstname}  { lastname }</h1>
// <p> Age: {this.state.count} </p>
// <p> Hair color {hairColor} </p>

// <button onClick={this.handleClick}> click me</button>
  

         
// </div>;
//     }
// }




// class MyNewComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     { this.props.header }
//                 </h1>
//                 { this.props.children }
//             </div>
//         );
//     }
// }

// export  { MyNewComponent, SomeClassComponent };
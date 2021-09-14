import React from "react";
import "./App.css";
import { Component } from "react";
import IterateList from "./components/MyForm/IterateList";
import FetchingData from "./components/FetchingData";
export default class App extends Component {
  // state(){}
  render() {
    return (
      <>
      {/* <IterateList/> */}
      <FetchingData/>
    
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <p>Welcome to react</p>
//     </div>
//   );
// }

// export default App;
// export default class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: ""
//       };
//       this.text = "hello";

//       this.changeHandler = this.changeHandler.bind(this);
//     }
//     clicked = () => {
//       this.setState({ age: 3, city: "bangalore" }); //asynchrous
//     };
//     changeHandler(event, name) {
//       console.log(event.target.value, name);
//       this.setState({ name: event.target.value });
//     }
//     render() {
//       let name = "Anubha";
//       return (
//         <Fragment>
//           <input onChange={(event) => this.changeHandler(event, name)} />
//           <h1>My name is {this.state.name}</h1>
//           <button onClick={this.clicked}>Click me</button>
//         </Fragment>
//       );
//     }
//   }

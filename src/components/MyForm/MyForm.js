import React, { Component, Fragment } from "react";
export default class MyForm extends Component {
  state = {
    empName: "",
    empNamelist: []
  };
  handlingChangeInInput = (event) => {
    //console.log(event.target.value);
    this.setState({ empName: event.target.value });
  };
  handlingEmployeesList = (event) => {
    event.preventDefault();//prevents page refresh
    let updatedEmp=[...this.state.empNamelist];
    updatedEmp.push(this.state.empName);
    this.setState({
      empNamelist: updatedEmp//,empName:""//<--empty the input field//this.state.empNamelist.concat(this.state.empName),
    });
    document.getElementById("myForm").reset();//clears all the input fields of the form
    // this.setState({empNameList:this.state.empNameList.push(this.state.empName)}); //this doesnot work
  };
  render() {
    return (
      <Fragment>
        <form id="myForm">
          <label>Enter Employee Name: </label>
          <input
            type="text"
            name="empName"
            //defaultValue="bratati"//{this.state.empName}//once initialised the value stays on screen
           // value={this.state.empName}

            onChange={this.handlingChangeInInput}
          />
          <button type="submit" onClick={this.handlingEmployeesList}>
            Add Employee
          </button>
        </form>
        <ul>
          The List of Employees added are:-
          <br />{" "}
          {this.state.empNamelist.map((empNamelist,index) => (
            <li key={index}>{empNamelist}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

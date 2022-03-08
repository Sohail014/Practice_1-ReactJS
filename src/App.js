import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import bridge from './Assets/img/BridgeLabz.jpg'

class App extends React.Component {
  url = "https://www.bridgelabz.com"
  constructor() {
    super();
    this.state = {
      userName: "",
      nameError: ""
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }


   //onNameChangefunction
  onNameChange = (event) => {
    console.log("click", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-z]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "Name follows regex" })
    }
    else {
      this.setState({ nameError: "Name not follows regex" });
    }
  }




  render() {
    return (
      <>
        <div >
          <h1>HELLO {this.state.userName} FROM BRIDGELABZ </h1>
          <img src={bridge} onClick={this.onClick}
            alt="The bridgelabz logo : bridge to the employment " />
        </div >
        <div>
          <input onChange={this.onNameChange} />
          <spam className="error-output">{this.state.nameError}</spam>
        </div>
      </>
    );
  }
}
export default App;



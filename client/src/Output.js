import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Output extends Component {
  constructor() {
    super();
    this.state = {
      //isLoading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, birthdate, email } = this.state;

    axios.post('api/submit', { username, birthdate, email }
    ).then(function (response) {
    }).catch(function (response) {
      console.log("err" + response);
    });
  }

  render() {
    // if (isLoading) {
    //   return <p>Loading ...</p>;
    // }
    return (
      <div className="Output">
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" onChange={this.handleChange} />
          <br />
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" onChange={this.handleChange} />
          <br />
          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" onChange={this.handleChange} />
          <br />
          <button>Send data!</button>
        </form> */}
      </div>
    );
  }
}

export default Output;

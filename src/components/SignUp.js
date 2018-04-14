import React, { Component } from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = 
        {
            user: {
                name: {first:'', last:''},
                email: '',
                password: ''
            }
        };
  
      this.handleChangeFirst = this.handleChange.bind(this);
      this.handleChangeLast = this.handleChange.bind(this);
      this.handleChangeEmail = this.handleChange.bind(this);
      this.handleChangePassword = this.handleChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeFirst(event) {
      this.setState({user.name.first: event.target.user.name.first});
    }

    handleChangeLast(event) {
        this.setState({user.name.last: event.target.user.name.last});
      }
    
      handleChangeEmail(event) {
        this.setState({user.email: event.target.user.email});
      }

      handleChangePassword(event) {
        this.setState({user.name.password: event.target.user.password});
      }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input type="text" value={this.state.user.name.first} onChange={this.handleChangeFirst} />
          </label>

          <label>
            Last Name
            <input type="text" value={this.state.value} onChange={this.handleChangeLast} />
          </label>

          <label>
            Email
            <input type="email" value={this.state.value} onChange={this.handleChangeEmail} />
          </label>

          <label>
            Password
            <input type="text" value={this.state.value} onChange={this.handleChangePassword} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
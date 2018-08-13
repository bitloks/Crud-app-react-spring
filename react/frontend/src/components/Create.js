import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {  // contacts data model
      name: '',
      address: '',
      city: '',
      phone: '',
      email: ''
    };
  }
  //controlled component for forms
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault(); //Prevent a submit button from submitting a form

    const { name, address, city, phone, email } = this.state;

    axios.post('/contacts', { name, address, city, phone, email }) //sending the data 
      .then((result) => {
        this.props.history.push("/")  // Pushes a new entry onto the history stack
      });
  }

  render() {
    const { name, address, city, phone, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD Student
            </h3>
          </div>
          {/* form body */}
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Student List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="author">City:</label>
                <input type="text" class="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div class="form-group">
                <label for="published_date">Phone:</label>
                <input type="text" class="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div class="form-group">
                <label for="publisher">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;

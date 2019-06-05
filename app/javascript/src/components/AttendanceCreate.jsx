import React, { Component } from 'react';
import { addAttendance } from '../APIs/attendances';

export default class AttendanceCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      email:'',
     };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({  
      email: '',
     })
    const newAttendance = await addAttendance(this.props.course.id, this.state.email);
    this.props.onSubmit(newAttendance);
  }
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  >
          <label htmlFor="Title">
            <input type="text" 
              name="email" 
              id="email" 
              className="form-control m-2 p-2"
              placeholder="Student email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              required
            />
          </label>
            <input type="submit"
              value="Invite to Course"
              className="btn btn-success m-2"
            required
            />
        </form>
      </div>
    );
  }
}
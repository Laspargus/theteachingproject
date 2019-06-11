import React, { Component } from 'react';
import { removeAttendance } from '../APIs/attendances';

export default class AttendanceInvited extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick = async e => {
    e.preventDefault()
    const id = e.target.value;
    const removedAttendance = await removeAttendance(this.props.course_id, id);
    this.props.removeAttendance(removedAttendance);
  };

  render () {
    const { attendances } = this.props;
    const invited = attendances.filter(attendance => attendance.status === false);
    return (
      <div>
        <span>Students Invited ({invited.length})</span><hr />
        {invited.map(attendance => (
          <div key={attendance.id}>
            {attendance.student.email}<button className="m-2 btn btn-danger" value={attendance.id} onClick={this.handleRemoveClick}><i className="far fa-trash-alt"></i></button>          
          </div>
        ))}
      </div>	
    );
  }
}
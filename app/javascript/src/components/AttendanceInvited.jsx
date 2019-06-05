import React, { Component } from 'react';
import Attendance from './Attendance';
import { removeAttendance } from '../APIs/attendances';

export default class AttendanceInvited extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
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
        {invited.map(attendance => (
          // <Attendance key={attendance.id} attendance={attendance} />,
          <div key={attendance.id}>
            {attendance.student.email}<button value={attendance.id} onClick={this.handleRemoveClick}>x</button>
          </div>
        ))}
      </div>	
    );
  }
}
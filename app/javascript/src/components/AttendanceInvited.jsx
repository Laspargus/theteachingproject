import React, { Component } from 'react';
import Attendance from './Attendance';

export default class AttendanceInvited extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { attendances } = this.props;
    console.log(attendances)
    return (
      <div>
        {attendances.map(attendance => (
          // <Attendance key={attendance.id} attendance={attendance} />,
          <div key={attendance.id}>{attendance.student.email}</div>
        ))}
      </div>	
    );
  }
}
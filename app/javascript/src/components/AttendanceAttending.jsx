import React, { Component } from 'react';

export default class AttendanceAttending extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const { attendances } = this.props;
    const invited = attendances.filter(attendance => attendance.status === true);
    return (
      <div>
        {invited.map(attendance => (
          // <Attendance key={attendance.id} attendance={attendance} />,
          <div key={attendance.id}>{attendance.student.email}</div>
        ))}
      </div>	
    );
  }
}
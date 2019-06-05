import React, { Component } from 'react';
import Attendance from './Attendance';

export default class AttendanceInvited extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const { attendances } = this.props;

    return (
      <div>
        {attendances.map(attendance => (
          <Attendance attendance={attendance} key={attendance.id}/>
        ))}
      </div>	
    );
  }
}
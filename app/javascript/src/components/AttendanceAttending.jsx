import React, { Component } from 'react';
import { removeAttendance } from '../APIs/attendances';

export default class AttendanceAttending extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  handleRemoveClick = async e => {
    e.preventDefault()
    const id = e.target.value;
    const removedAttendance = await removeAttendance(this.props.course_id, id);
    this.props.removeAttendance(removedAttendance);
  };
  
  render () {
    const { attendances } = this.props;
    const invited = attendances.filter(attendance => attendance.status === true);
    return (
      <div>
        {invited.map(attendance => (
          // <Attendance key={attendance.id} attendance={attendance} />,
          <div key={attendance.id}>
            {console.log("attendance", attendance)}
            {attendance.student.email}<button value={attendance.id} onClick={this.handleRemoveClick}>x</button>
            
          </div>
        ))}
      </div>	
    );
  }
}
import React from 'react';
import { updateAttendance } from '../APIs/attendances';

class AttendanceAccept extends React.Component {
  constructor(props) {
    super(props);
  };

  handleAccept = async e => {
    e.preventDefault()
    const id = e.target.value;
    const updatedAttendance = await updateAttendance(this.props.course_id, id);
    this.props.updateAttendance(updatedAttendance);
  };

  acceptButton(currentStudent) {
    if (currentStudent) {
      const studentInvited = this.props.attendances.filter(attendance => (attendance.student.id === currentStudent.id && attendance.status === false));
      return(
        <div>
          {studentInvited.map(attendance => (
          <div key={attendance.id}>
            <button value={attendance.id} onClick={this.handleAccept}>Accept</button>
          </div>
        ))}
        </div>
      )
    }
  }

  render() {
    const { currentStudent } = this.props;
    return (
      <div>
        { this.acceptButton(currentStudent) }   
      </div>
    );
  }
}

export default AttendanceAccept;
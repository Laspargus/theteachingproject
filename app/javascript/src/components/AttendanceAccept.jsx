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

  render() {
    const { attendances, currentStudent } = this.props;
    const studentInvited = attendances.filter(attendance => (attendance.student.id === currentStudent.id && attendance.status === false));
    return (
      <div>
        {studentInvited.map(attendance => (
          // <Attendance key={attendance.id} attendance={attendance} />,
          <div key={attendance.id}>
            <button value={attendance.id} onClick={this.handleAccept}>Accept</button>
          </div>
        ))}
      </div>
    );
  }
}

export default AttendanceAccept;
import React from 'react';
import { updateAttendance } from '../APIs/attendances';

class AttendanceAccept extends React.Component {
  constructor(props) {
    super(props);
  };

  handleAccept = async e => {
    e.preventDefault()
    const id = e.target.value;
    const acceptedAttendance = await updateAttendance(this.props.course_id, id);
    this.props.acceptAttendance(acceptedAttendance);
  };

  render() {
    const { attendances } = this.props;
    return (
      <div>
        {attendances.map(attendance => (
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
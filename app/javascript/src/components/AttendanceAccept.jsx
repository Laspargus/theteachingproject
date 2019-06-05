import React from 'react';

class AttendanceAccept extends React.Component {
  constructor(props) {
    super(props);
  };

  handleAccept = async e => {
    e.preventDefault()
    const id = e.target.value;
    const acceptedAttendance = await removeAttendance(this.props.course_id, id);
    this.props.acceptAttendance(acceptedAttendance);
  };

  render() {
    const { attendance } = this.props;
    return (
      <div>
        <button value={attendance.id} onClick={this.handleAccept}>Accept</button>  
      </div>
    );
  }
}

export default AttendanceAccept;
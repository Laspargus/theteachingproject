import React from 'react';

class Attendance extends React.Component {

  
  render() {
    const { attendance } = this.props;
    return (
      <div>      
        {attendance.student_id}
      </div>
    );
  }
}

export default Attendance;
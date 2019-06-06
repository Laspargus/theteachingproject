import React from 'react';
import AttendanceCreate from './AttendanceCreate';
import AttendanceAttending from './AttendanceAttending';
import AttendanceInvited from './AttendanceInvited';
import AttendanceAccept from './AttendanceAccept';

class Attendance extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { course, onSubmit, attendances, removeAttendance, course_id, currentStudent, updateAttendance } = this.props;
    if(currentStudent) {
      return (
        <div>
          <AttendanceAccept
            attendances={attendances} 
            updateAttendance={updateAttendance} 
            course_id={course_id} 
            currentStudent={currentStudent} 
          />
        </div>
      )
    } else {
      return (
        <div>
          <div className="card col-md-12">
            <AttendanceCreate
              course={course} 
              onSubmit={onSubmit}
            />
            <div className="row">
              <div className="card col-md-6">
                <AttendanceInvited 
                  attendances={ attendances } 
                  removeAttendance={removeAttendance} 
                  course_id={course_id} 
                />
              </div>
              <div className="card col-md-6">
                <AttendanceAttending 
                  attendances={ attendances } 
                  removeAttendance={removeAttendance} 
                  course_id={course_id} 
                />
              </div>
            </div>
          </div>    
        </div>
      );
    }
  }
}

export default Attendance;
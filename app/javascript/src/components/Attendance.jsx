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
    const { setErrors, course, onSubmit, attendances, removeAttendance, course_id, currentStudent, updateAttendance } = this.props;
    if(currentStudent) {
      return (
        <div>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Pending Attendance
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <AttendanceAccept
                    attendances={attendances} 
                    updateAttendance={updateAttendance} 
                    course_id={course_id} 
                    currentStudent={currentStudent} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Invite Student
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
          <div className="card col-md-12">
            <AttendanceCreate
              course={course} 
              onSubmit={onSubmit}
              setErrors={setErrors}
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
      </div>
    </div>    
  </div>
  </div>
      );
    }
  }
}

export default Attendance;
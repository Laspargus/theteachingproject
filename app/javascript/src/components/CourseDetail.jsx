import React from 'react';
import { fetchSteps } from '../APIs/steps';
import StepList from './StepList';
import StepCreate from './StepCreate';
import { showCourse } from '../APIs/courses';
import AttendanceCreate from './AttendanceCreate';
import AttendanceAttending from './AttendanceAttending';
import AttendanceInvited from './AttendanceInvited';
import { fetchAttendances } from '../APIs/attendances';

class CourseDetail extends React.Component {

 constructor(props) {
    super(props);

    let match = props.match;
    this.state = { 
      steps: [],
      attendances: [],
      course: [],
      course_id: match.params.id
    };   
     this.addStepToList = this.addStepToList.bind(this);
     this.removeStepFromList = this.removeStepFromList.bind(this);
     this.updateStep = this.updateStep.bind(this);
     this.addAttendanceToInvited = this.addAttendanceToInvited.bind(this);
     this.removeAttendance = this.removeAttendance.bind(this);
  };

getCourse = async () => {
        const course = await showCourse(this.state.course_id);
          this.setState({
          course: course.course
        });
    }
  
 componentDidMount = async () => {
    this.getCourse();
    this.refreshSteps();
    this.refreshAttendances()
  }

  refreshSteps = async () => {
    const steps = await fetchSteps(this.state.course_id);
    this.setState({
      steps: steps.steps,
    });
  }

  addStepToList(newStep) {
    this.setState({
       steps : [newStep, ...this.state.steps],
    }); 
  }

  removeStepFromList( steptoremove ) {
    this.setState({
      steps: this.state.steps.filter(step => steptoremove.id !== step.id)
    });
  }

  updateStep(updatedStep) {
    this.setState({
      steps: this.state.steps.map(step =>
        step.id === updatedStep.id ? updatedStep : step
      ),
    });
  };

  refreshAttendances = async () => {
    const attendances = await fetchAttendances(this.state.course_id);
    this.setState({
      attendances: attendances.attendances
    });
    const invited = attendances.attendances.filter(attendance => attendance.status === false)
    console.log(invited)
  }

  addAttendanceToInvited(newAttendance) {
    this.setState({
       attendances : [newAttendance, ...this.state.attendances],
    }); 
  }

  removeAttendance(removedAttendance) {
    this.setState({
      attendances: this.state.attendances.filter(step => removedAttendance.id !== step.id)
    });
  }

	render(){
    const { steps } = this.state.steps;
    const { course } = this.state.course;
    return (
     <div className="container"> 
        <h2>{this.state.course.title} - {this.state.course.description}</h2>
        <div className="card col-md-12">
          <div className="card col-md-12">
            <AttendanceCreate course={this.state.course} onSubmit={this.addAttendanceToInvited} />
          </div>
          <div className="row">
            <div className="card col-md-6">
              <AttendanceInvited attendances={this.state.attendances} removeAttendance={this.removeAttendance} course_id={this.state.course_id} />
            </div>
            <div className="card col-md-6">
              <AttendanceAttending attendances={this.state.attendances} removeAttendance={this.removeAttendance} course_id={this.state.course_id} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col-md-5 m-2 card-body">  
           <div className="form-group row">    
            <StepCreate
                onSubmit={this.addStepToList}
                course={ this.state.course }
              />
            </div>
            <div>
             <StepList
               steps = {this.state.steps}
               removeStep = {this.removeStepFromList}
               course = {this.state.course}
               updateStep = {this.updateStep}
               />
            </div>
          </div>
           <div className="card col-md-5 m-2 card-body">
           Questions
           </div>
           </div>
      </div>  

    );
  }
}


export default CourseDetail;
import React from 'react';
import { fetchSteps } from '../APIs/steps';
import StepList from './StepList';
import StepCreate from './StepCreate';
import { showCourse } from '../APIs/courses';
import AttendanceCreate from './AttendanceCreate';
import AttendanceAttending from './AttendanceAttending';
import AttendanceInvited from './AttendanceInvited';
import AttendanceAccept from './AttendanceAccept';
import { fetchAttendances } from '../APIs/attendances';
import { fetchQuestions } from '../APIs/questions';
import QuestionList from './QuestionList';
import QuestionCreate from './QuestionCreate';

class CourseDetail extends React.Component {

 constructor(props) {
    super(props);

    let match = props.match;
    this.state = { 
      steps: [],
      attendances: [],
      course: [],
      questions: [],
      course_id: match.params.id
    };   
    this.addStepToList = this.addStepToList.bind(this);
    this.removeStepFromList = this.removeStepFromList.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.addAttendanceToInvited = this.addAttendanceToInvited.bind(this);
    this.removeAttendance = this.removeAttendance.bind(this);
    this.addQuestionToList = this.addQuestionToList.bind(this);
    this.removeQuestionFromList = this.removeQuestionFromList.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this); 
    this.updateAttendance = this.updateAttendance.bind(this);
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
    this.refreshQuestions();
  }

  refreshSteps = async () => {
    const steps = await fetchSteps(this.state.course_id);
    this.setState({
      steps: steps.steps,
    });
  }

  refreshQuestions = async () => {
    const questions = await fetchQuestions(this.state.course_id);
    this.setState({
      questions: questions.questions,
    }); 
  }

  addQuestionToList(newQuestion) {
    this.setState({
       questions: [newQuestion, ...this.state.questions],
    }); 
  }

  removeQuestionFromList( questiontoremove ) {
    this.setState({
      questions: this.state.questions.filter(question => questiontoremove.id !== question.id)
    });
  }

  updateQuestion(updatedQuestion) {
    this.setState({
      questions: this.state.questions.map(question =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      ),
    });
  };

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

  updateAttendance(updatedAttendance) {
    this.setState({
      attendances: this.state.attendances.map(attendance =>
        attendance.id === updatedAttendance.id ? updatedAttendance : attendance
      ),
    });
  };

	render(){
    const { steps } = this.state.steps;
    const { course } = this.state.course;
    const currentStudent = this.props.currentStudent;
    const currentTeacher = this.props.currentTeacher;

    return (
     <div className="container"> 
        <h2>{this.state.course.title} - {this.state.course.description}</h2>
        <div className="card col-md-12">
          <div className="row">
            <div className="card col-md-9">
              <AttendanceCreate course={this.state.course} onSubmit={this.addAttendanceToInvited} />
            </div>
            <div className="card col-md-3">
              <AttendanceAccept attendances={this.state.attendances} updateAttendance={this.updateAttendance} course_id={this.state.course_id} currentStudent={currentStudent} />
            </div>
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
                currentTeacher={ currentTeacher }
              />
            </div>
            <div>
             <StepList
              steps = {this.state.steps}
              removeStep = {this.removeStepFromList}
              course = {this.state.course}
              updateStep = {this.updateStep}
              currentStudent = { currentStudent }
              currentTeacher={ currentTeacher }
               />
            </div>
          </div>
           <div className="card col-md-5 m-2 card-body">
             <div className="form-group row">    
              <QuestionCreate
                  onSubmit={this.addQuestionToList}
                  course={ this.state.course }
                  currentStudent = { currentStudent }
                />
              </div>
            <div>
              <QuestionList
                questions = {this.state.questions}
                removeQuestion = {this.removeQuestionFromList}
                course = {this.state.course}
                updateQuestion = {this.updateQuestion}
                currentStudent = { currentStudent }
                currentTeacher={ currentTeacher }
              />
            </div>
           </div>
        </div>
      </div>  
    );
  }
}

export default CourseDetail;
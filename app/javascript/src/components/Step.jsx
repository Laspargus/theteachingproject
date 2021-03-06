import React from 'react';
import { removeStep } from '../APIs/steps';
import StepEdit from './StepEdit';
import Achievement from './Achievement';
import { fetchAchievers } from '../APIs/steps';
import Achievements from './Achievements';
import { fetchAchievements } from '../APIs/achievements';

class Step extends React.Component {
  constructor(props){
    super(props);
  	this.state = {
      edit: false,
      step_achievers: [],
      achievements: [],
    };
    this.addAchiever = this.addAchiever.bind(this);
    this.refreshAchievements = this.refreshAchievements.bind(this);
    this.deleteAchiever = this.deleteAchiever.bind(this);
    this.handleAchievementClick = this.handleAchievementClick.bind(this);
  }

  componentDidMount = async () => {
    this.refreshAchievers();
    await this.refreshAchievements();
  }

  refreshAchievements = async () => {
    const course_id = this.props.course.id;
    const step_id = this.props.step.id;
    const currentStudent = this.props.currentStudent
    const achievements = await fetchAchievements(course_id, step_id);
    this.setState({
      achievements: achievements,
    }); 
  }

  handleAchievementClick = async (boolean, achievement) => {
    const step_id = this.props.step.id;
    const currentStudent = this.props.currentStudent;
    if (boolean === false) {
      this.deleteAchiever(currentStudent, achievement)
    } else {
      this.addAchiever(currentStudent, achievement)
    }
  }

  addAchiever(achiever, achievementToAdd) {
    console.log("this.state.achievements.lenghtyyyyyyy", this.state.achievements[0])
    if (this.state.achievements[0]) {
      this.setState({
              step_achievers : [achiever, ...this.state.step_achievers],
              achievements: [achievementToAdd, ...this.state.achievements]
            }); 
    } else {
      this.setState({
        step_achievers : [achiever, ...this.state.step_achievers],
        achievements: [achievementToAdd]
      }); 
    }
  }

  deleteAchiever(achieverToDelete, achievementToDelete) {
    this.setState({
      step_achievers: this.state.step_achievers.filter(achiever => achieverToDelete.id !== achiever.id),
      achievements: this.state.achievements.filter(achievement => achievementToDelete.id !== achievement.id)
    });
  }

	toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  handleRemove = async () => {
    const { course, step } = this.props;
    const steptoremove = await removeStep(course.id, step.id);
    this.props.removeStep(steptoremove);
  };

  refreshAchievers = async () => {
    const step_achievers = await fetchAchievers(this.props.course.id, this.props.step.id);
    this.setState({
      step_achievers: step_achievers,
    }); 
  }

  renderButtonsTeacher = () => {

    const { course, toggleEdit, updateStep, removeStep, step, currentTeacher } = this.props;
		const { edit } = this.state;
	
    if (currentTeacher && edit){
    	return (
      	<StepEdit 
      	course = {course}
      	step = {step}
      	onSubmit = {this.toggleEdit}
      	updateStep = {updateStep}
        currentTeacher={ currentTeacher }
      	/>
    	);
    } else if (currentTeacher) {
      return (
        <span>
         {step.title} -  {step.description}    
          <a
            className="m-2 btn btn-info"
            role="button"
            tabIndex={0}
            onClick={this.toggleEdit}
            onKeyPress={this.toggleEdit}
          >
              <i className="fas fa-edit"></i>
          </a>    
          <a
            className="m-2 btn btn-danger"
            onClick={this.handleRemove}
            onKeyPress={this.handleRemove}
            role="button"
            tabIndex={0}
          >
            <i className="far fa-trash-alt"></i>
          </a>
        </span>
      ); 
    }
  };

  renderStudentAchievement = () => {
    const { course, step, currentStudent } = this.props;  

    if (currentStudent) {
      return (
        <Achievement 
          course={ course } 
          step={ step } 
          currentStudent={ currentStudent } 
          step_achievers={ this.state.step_achievers } 
          onClick={this.handleAchievementClick}
          achievements={this.state.achievements}
        />
      );
    }
  }

  render() {
    const { course, step, removeStep, currentTeacher, currentStudent } = this.props;
    return (
      <div>
        <div className="post">      
          {this.renderButtonsTeacher()} {this.renderStudentAchievement()}
        </div>
        <Achievements
          course={course}
          step={step}
          key={step.id}
          currentStudent={ currentStudent }
          currentTeacher={ currentTeacher }
          achievements={ this.state.achievements }
          />
      </div>
    );
  }
}


export default Step;
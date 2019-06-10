import React from 'react';
import { addAchievement } from '../APIs/achievements';
import { removeAchievement } from '../APIs/achievements';

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddAchievement = this.handleAddAchievement.bind(this);
;   this.handleDeleteAchievement = this.handleDeleteAchievement.bind(this)
  };

  handleAddAchievement = async e =>{
    e.preventDefault();
    const newAchievement = await addAchievement(this.props.course.id, this.props.step.id, this.props.currentStudent.id);
    const achiever = this.props.currentStudent
    this.props.onClick(true, newAchievement);
  };

  handleDeleteAchievement = async () => {
    const { course, step, currentStudent, achievements} = this.props;
    const achievement_array = achievements.filter(achievement => (achievement.student_id === currentStudent.id))
    const achievement = achievement_array[0]
    const achievementToRemove = await removeAchievement(course.id, step.id, achievement.id );
    this.props.onClick(false, achievementToRemove);
  };

  studentHasAchieved = () => {
    const step = this.props.step  
    return(
      <span>
        {step.title} -  {step.description}
        <button
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          onClick={this.handleDeleteAchievement}
        >
          <i className="far fa-times-circle"></i>
        </button>    
      </span>
    );
  };

  studentHasNotAchieved = () => {
    const step = this.props.step  
    return(
      <span>
        {step.title} -  {step.description}
        <button
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          onClick={this.handleAddAchievement}
        >
          <i className="fas fa-clipboard-check"></i>
        </button>    
      </span>
    );
  };

  checkIfAchieved = () => {
    const achievers = this.props.step_achievers
    const currentStudent = this.props.currentStudent; 
    if (achievers.filter(achiever => (achiever.id === currentStudent.id)).length > 0) {
      return true
    } else {
      return false
    }
  };

  render() {
	  return (
      <div>
        { this.checkIfAchieved() ? this.studentHasAchieved() : this.studentHasNotAchieved() }
      </div>
	  );
	}
}

export default Achievement;
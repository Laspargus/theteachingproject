import React from 'react';
import { addAchievement } from '../APIs/achievements'
import { removeAchievement } from '../APIs/achievements'

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddAchievement = this.handleAddAchievement.bind(this);
;    this.handleDeleteAchievement = this.handleDeleteAchievement.bind(this)
  };

  handleAddAchievement = async e =>{
    e.preventDefault();
    const newAchievement = await addAchievement(this.props.course.id, this.props.step.id, this.props.currentStudent.id);
    const achiever = this.props.currentStudent
    this.props.onClick(achiever);
  };

  handleDeleteAchievement = async () => {
    const { course, step, currentStudent, achievement} = this.props;
    const achievementToRemove = await removeAchievement(course.id, step.id, currentStudent.id, achievement.id );
    this.props.onClick(achievementToRemove);
  };

  studentHasAchieved = () => {
    const step = this.props.step  
    return(
      <span>
        {step.title} -  {step.description}
        <a
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          onClick={this.handleDeleteAchievement}
        >
          <i className="far fa-times-circle"></i>
        </a>    
      </span>
    );
  };

  studentHasNotAchieved = () => {
    const step = this.props.step  
    return(
      <span>
        {step.title} -  {step.description}
        <a
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          // onClick={this.handleAddAchievement}
        >
          <i className="fas fa-clipboard-check"></i>
        </a>    
      </span>
    );
  };

  checkIfAchieved = () => {
    const achievers = this.props.step_achievers
    const { currentStudent } = this.props; 
    console.log("achievers", achievers)
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
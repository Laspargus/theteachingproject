import React from 'react';
import { removeStep } from '../APIs/steps';
import StepEdit from './StepEdit';
import Achievement from './Achievement';
import { fetchAchievers } from '../APIs/steps';

class Step extends React.Component {
  constructor(props){
    super(props);
  	this.state = {
      edit: false,
      step_achievers: [],
    };
    this.addAchiever = this.addAchiever.bind(this);
  }

  componentDidMount = async () => {
    this.refreshAchievers();
  }

  addAchiever(achiever) {
    this.setState({
       step_achievers : [achiever, ...this.state.step_achievers],
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
          onClick={this.addAchiever}
        />
      );
    }
  }

  render() {
    const { step, removeStep, currentTeacher } = this.props;
    return (
      <div>
        <div className="post">      
          {this.renderButtonsTeacher()} {this.renderStudentAchievement()}
        </div>
      </div>
    );
  }
}


export default Step;
import React from 'react';

class Achievement extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClick = async e =>{
  //   e.preventDefault();
  //   const newAchievement = await addCourse(this.state.title, this.state.description);
  //   this.props.onSubmit(newCourse);
  //   this.setState({  
  //    title: 'title',
  //    description: 'description'
  //   });
  // }

  studentHasAchieved = () => {
    const step = this.props.step  
    return(
      <span>
        {step.title} -  {step.description}
        <a
          className="m-2 btn btn-info"
          role="button"
          tabIndex={0}
          // onClick={this.handleAchievement}
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
          // onClick={this.handleAchievement}
        >
          <i className="fas fa-clipboard-check"></i>
        </a>    
      </span>
    );
  };

  checkIfAchieved = () => {
    const achievers = this.props.step_achievers
    const { currentStudent } = this.props; 
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
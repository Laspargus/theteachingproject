import React from 'react';
import { removeStep, stepRequest } from '../APIs/steps';
import StepEdit from './StepEdit';

class Step extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
  }

  //https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
	// state = {
	//       edit: false,
	//     };


	toggleEdit = () => {
	    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  handleRemove = async () => {
    const { course, step } = this.props;
    // const stepToRemove = await removeStep(course.id, step.id);
    
    const stepToRemove = await stepRequest({
      url: `/courses/${course.id}/steps/${step.id}`, 
      method: 'DELETE', 
      dataObject: {}
    });
    this.props.removeStep(stepToRemove);
  };

render() {
  const { course, toggleEdit, updateStep, removeStep, step } = this.props;
  const { edit } = this.state;
  
  return (
    <div className="post">      
      {edit 
        ?
        <StepEdit 
          course = {course}
          step = {step}
          onSubmit = {this.toggleEdit}
          updateStep = {updateStep}
        />
        :
        <React.Fragment>
         {step.title} -  {step.description}    

          <button
            className="m-2 btn btn-info"
            role="button"
            tabIndex={0}
            onClick={this.toggleEdit}
            onKeyPress={this.toggleEdit} >
          Edit
          </button>
        
          <button
            className="m-2 btn btn-danger"
            onClick={this.handleRemove}
            onKeyPress={this.handleRemove}
            role="button"
            tabIndex={0}
          >Delete
          </button>
        </React.Fragment>
        }

      </div>
    );
    //https://reactjs.org/docs/conditional-rendering.html
  }
}


export default Step;
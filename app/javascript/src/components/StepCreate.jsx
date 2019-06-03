import React from 'react';
import { addStep, stepRequest } from '../APIs/steps';

class StepCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      title: '',
      description: '',
     };
    
  }

handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmitStepForm = async e =>{
    e.preventDefault();
    const {course, step} = this.props
    const newStep = await addStep(course.id, step.id, this.state.title, this.state.description);
    
    // const newStep = await stepRequest({
    //   url: `/courses/${course.id}/steps`, 
    //   method: 'POST', 
    //   dataObject: {
    //     step: { 
    //       id: course.id, 
    //       title: this.state.title, 
    //       description: this.state.description 
    //     } 
    //   }
    // });

    this.props.onSubmit(newStep);
    this.setState({  
     title: 'title',
     description: 'description'
    });
  }

 
  
  render () {
    return (
      <div>
        <form 
        className="block" 
        onSubmit={this.handleSubmitStepForm}  
        >
         <span>Création d'un step :</span>
          <label htmlFor="Title">
            <input type="text" 
              name="title" 
              id="title" 
              className="m-2 form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </label>
          <label htmlFor="Description">
            <input type="text" 
              name="description" 
              id="description" 
              className="m-2 form-control"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              required
            />
          </label>
      
            <input type="submit"
              value="Create!"
              className="m-2 btn btn-success"
              required
            />
       
        </form>
      </div>
    );
  }
}
export default StepCreate;
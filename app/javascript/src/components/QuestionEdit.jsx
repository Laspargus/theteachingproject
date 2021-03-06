import React, { Component } from 'react';
import { updateQuestion } from '../APIs/questions';


export default class QuestionEdit extends Component {

  constructor(props) {
	  super(props);
	  this.state = { 
	    content: ''
	  }; 
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  }


  handleCancel = () => {
  this.props.cancelEdit();
  }


  handleSubmit = async e =>{
  	const {course, question} =this.props
    e.preventDefault();
    const updatedQuestion = await updateQuestion(course.id, question.id, this.state.content);
    this.props.updateQuestion(updatedQuestion);
    this.props.onSubmit();
  }

  renderButtons = () => {
      return (
        <span>
          <button
            className="m-2 btn btn-info"
            role="button"
            onClick={this.handleCancel}
            onKeyPress={this.handleCancel} 
           >
         		Cancel
          </button>

      </span>
      );
    }
  
  render() {
    const { question } = this.props;
	    return(
	       <div className="block">
	        <form onSubmit={this.handleSubmit}>
	          <label htmlFor="Title">
	            <input type="text" 
	              name="content" 
	              id="content" 
	              className="form-control"
	              placeholder={question.content}
	              value={this.state.content}
	              onChange={this.handleChangeContent}
	            />
	          </label>
	            <input type="submit"
	              value="Update!"
	              className="btn btn-success"
	              required
	            />
	           </form>
	         
	          {this.renderButtons()}
	    </div>
	    );
  }
}
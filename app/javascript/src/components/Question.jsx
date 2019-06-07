import React from 'react';
import { removeQuestion } from '../APIs/questions';
import QuestionEdit from './QuestionEdit';

class Question extends React.Component {

	state = {
	      edit: false,
	    };

	toggleEdit = () => {
	    const { edit } = this.state;
	    this.setState({
	      edit: !edit,
	    });
	  };

  handleRemove = async () => {
    const { course, question } = this.props;
    const questiontoremove = await removeQuestion(course.id, question.id);
    this.props.removeQuestion(questiontoremove); 
  };

  check_ownership(question, currentStudent){
    const question_owner = question.student.id;
    const student_id = currentStudent.id;
      if (question_owner === student_id){
        return  true 
      }
        return false
  };


  renderButtons = () => {
    const { course, toggleEdit, updateQuestion, removeQuestion, question, currentStudent, currentTeacher } = this.props;
		const { edit } = this.state;  
    if (edit){
    	return (
    	<QuestionEdit 
    	course = {course}
    	question = {question}
    	onSubmit = {this.toggleEdit}
    	updateQuestion = {updateQuestion}
      cancelEdit = {this.toggleEdit}
    	/>
    	);
    }
    else if(currentStudent) {
      const check = this.check_ownership(question, currentStudent);
      if(check){
        return (
          <span>  
          {question.content}   
            <a className="m-2 btn btn-info"
              role="button"
              tabIndex={0}
              onClick={this.toggleEdit}
              onKeyPress={this.toggleEdit} >
            <i className="fas fa-edit"></i>
            </a>         
            <a
              className="m-2 btn btn-danger"
              onClick={this.handleRemove}
              onKeyPress={this.handleRemove}
              role="button"
              tabIndex={0}>
            <i className="far fa-trash-alt"></i>
            </a>
        </span>
        ); 
        }
      else {
        return(
          <span>
           {question.content}
           </span>
        );
      }
    }
    else {
      return(
        <span>
         {question.content}
         </span>
      );
    }
 
  };

  render() {
    const { question, removeQuestion, currentStudent, currentTeacher} = this.props;
    return (
      <React.Fragment>     
          {this.renderButtons()}    
      </React.Fragment>
     
    );
  }
}

export default Question;
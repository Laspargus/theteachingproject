import React from 'react';
import { addQuestion} from '../APIs/questions';

class QuestionCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      content: '',
     };   
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmitQuestionForm = async e =>{
    e.preventDefault();
    const {course, question} = this.props
    const newQuestion = await addQuestion(course.id, this.state.content);
    this.props.onSubmit(newQuestion);
    this.setState({  
     content: 'content',
    });
  }

  magicNumber(currentStudent) {
    if (currentStudent) {
      return(
        <div>
          MAGIC NUMBER IS MAGIIIIC 4
        </div>
      )
    }
  }
  
  render () {

    const { currentStudent } = this.props;

    return (
      <div>
       <span>New question :</span>
       <div>
          only students can see the magic number :
          { this.magicNumber(currentStudent) }
       </div>
        <form 
          className="block" 
          onSubmit={this.handleSubmitQuestionForm}  
        >
          <label htmlFor="Content">
            <input 
              type="text" 
              name="content" 
              id="content" 
              className="m-2 form-control"
              placeholder="Content"
              value={this.state.content}
              onChange={this.handleChangeContent}
              required
            />
          </label>
      
          <input 
            type="submit"
            value="Create!"
            className="m-2 btn btn-success"
            required
          />
       
        </form>
      </div>
    );
  }
}
export default QuestionCreate;
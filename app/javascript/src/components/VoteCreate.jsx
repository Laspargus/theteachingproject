import React from 'react';
import { addVote } from '../APIs/votes';


class VoteCreate extends React.Component {
 constructor(props) {
    super(props);
  }

  handleClick = async e =>{
  	this.props.onCreate();
  	const course_id =this.props.course.id
  	const question_id = this.props.question.id
    e.preventDefault();
    const newvote = await addVote(course_id, question_id);
    this.props.addToList(newvote);
  }

  render() { 
		    return (
			    <button     
		        onClick = {this.handleClick}
		        className = "btn btn-info m-2"
			    >Vote
			    </button>
		     );
	    }
		}

export default VoteCreate;

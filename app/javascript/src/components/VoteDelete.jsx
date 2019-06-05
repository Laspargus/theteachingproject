import React from 'react';
import { removeVote } from '../APIs/votes';


class VoteDelete extends React.Component {
constructor(props) {
    super(props);
  }


 handleClick = async e =>{
  	this.props.onDelete();
  	const course_id =this.props.course.id
  	console.log(course_id);
  	const question_id = this.props.question.id
  	console.log(question_id);
    e.preventDefault();
    const deleteVote = await removeVote(course_id, question_id);
    console.log(removeVote);
  }

  render() { 
		    return (
			    <button     
		        onClick = {this.handleClick}
		        className = "btn btn-info"
			    >Unvote
			    </button>
		     );
	    }
}

export default VoteDelete;
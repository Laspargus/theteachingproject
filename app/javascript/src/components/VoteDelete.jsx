import React from 'react';
import { removeVote } from '../APIs/votes';
import { findVote } from '../APIs/votes';

class VoteDelete extends React.Component {
constructor(props) {
    super(props);
  }


 handleClick = async e =>{
  	
  	const course_id =this.props.course.id
  	const question_id = this.props.question.id
    e.preventDefault();
    const vote = await findVote(course_id, question_id);
    const vote_id = vote.id
    const deletedVote = await removeVote(course_id, question_id, vote_id);
    this.props.removeFromList(deletedVote);
    this.props.onDelete();
  }

  render() { 
		    return (
			    <button     
		        onClick = {this.handleClick}
		        className = "btn btn-info m-2"
			    >Unvote
			    </button>
		     );
	    }
}

export default VoteDelete;
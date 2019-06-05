import React from 'react';
import { fetchVotes } from '../APIs/votes';
import VoteDelete from './VoteDelete';
import VoteCreate from './VoteCreate';


class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	votes: [],
    	has_voted: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  	toggleEdit = () => {
	    const has_voted = this.state.has_voted;
	    this.setState({
	      has_voted: !has_voted,
	    });
	  };


 componentDidMount = async () => {
    this.refreshVotes();
  }

 refreshVotes = async () => {
 		const course_id = this.props.course.id ;
 		const question_id = this.props.question.id ;
    const votes = await fetchVotes(course_id, question_id);
    this.setState({
      votes: votes,
    }); 
  }


  render() {
  	const total_votes = this.state.votes.length
  	const has_voted = this.state.has_voted
  	const course = this.props.course
  	const question = this.props.question

  	console.log(has_voted)
  	 if (has_voted) {
      return (
      	<React.Fragment>
        <VoteDelete      
          onDelete = {this.toggleEdit}
          className = "btn btn-info"
          course = {course}
          question = {question}
       	/>
        <span className="badge badge-pill badge-warning ml-2">{total_votes} votes</span>
        </React.Fragment>
      );
     }

	    else  {
		    return (
		    	<React.Fragment>
			    <VoteCreate      
		        onCreate = {this.toggleEdit}
		        className = "btn btn-info"
		        course = {course}
          	question = {question}
			    />
			    <span className="badge badge-pill badge-warning ml-2">{total_votes} votes</span>
			    </React.Fragment>
		     );
	    }
		}
}

export default Votes;

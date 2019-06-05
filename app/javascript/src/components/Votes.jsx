import React from 'react';
import { fetchVotes } from '../APIs/votes';
import VoteDelete from './VoteDelete';
import VoteCreate from './VoteCreate';
import { findVote } from '../APIs/votes';

class Votes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	votes: [],
    	has_voted: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
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
    const has_voted = await findVote(course_id, question_id);
    console.log("le resultat de mon fetch has has_voted", has_voted);

    this.setState({
      votes: votes,
    }); 
  }


  addToList(newVote) {
  	console.log('ceci est lid de mon vote a ajouter', newVote);
    this.setState({
       votes : [newVote, ...this.state.votes],
    }); 
  }


  removeFromList(votetoremove) {
  	const vote_id = votetoremove.id;
  	console.log('ceci est lid du vote a supprimer de ma liste',vote_id);
  	console.log('ceci est mon tableau avant suppression', this.state.votes)

    this.setState({
      votes: this.state.votes.filter(vote => vote_id !== vote.id)
    });

    console.log('ceci est mon tableau après suppression', this.state.votes)
  }

  render() {
  	const total_votes = this.state.votes.length
  	const has_voted = this.state.has_voted
  	const course = this.props.course
  	const question = this.props.question

  	 if (has_voted) {
      return (
      	<React.Fragment>
        <VoteDelete      
          onDelete = {this.toggleEdit}
          removeFromList = {this.removeFromList}
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
          	addToList = {this.addToList}
			    />
			    <span className="badge badge-pill badge-warning ml-2">{total_votes} votes</span>
			    </React.Fragment>
		     );
	    }
		}
}

export default Votes;

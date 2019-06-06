import React from 'react';
import { fetchAchievers } from '../APIs/steps'

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      step_achievers: [],
    };
  }

  componentDidMount = async () => {
    this.refreshAchievers();
  }

  refreshAchievers = async () => {
    const step_achievers = await fetchAchievers(this.props.course.id, this.props.step.id);
    this.setState({
      step_achievers: step_achievers,
    }); 
  }

  render() {

    const achievers = this.state.step_achievers

	  return (
	  	<div>
        mes achievers : { achievers.map(achiever => (
           `---${achiever}---`
        )) }
	  	</div>
	  );
	}
}

export default Achievement;
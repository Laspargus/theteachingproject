import React from 'react';
import { fetchAchievements } from '../APIs/achievements';
import { fetchAttendances } from '../APIs/attendances';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	achievements: [],
    	attendances: [],
    };
  }

 componentDidMount = async () => {
    this.refreshAchievements();
    this.refreshAttendances();
  }

 refreshAttendances = async () => {
 		const course_id = this.props.course.id;
    const attendances = await fetchAttendances(course_id);
    this.setState({
      attendances: attendances,
    }); 
  }

 refreshAchievements = async () => {
 		const course_id = this.props.course.id;
 		const step_id = this.props.step.id;
    const achievements = await fetchAchievements(course_id, step_id);
    this.setState({
      achievements: achievements,
    }); 
  }

  countPercentage = (achievements_num, attendances_num) => {
  	const result = (achievements_num * 100) / attendances_num;
  	return Math.round(result)
  }

  render() {

  	const now = this.countPercentage(this.state.achievements.length, this.state.attendances.length)

	  return (
	  	<div>
	  		<ProgressBar animated now={ now } label={ isNaN(now) ? `${0}%` : `${now}%`} />
	  		achievement counter : {this.state.achievements.length}
	  		<div>
	  			attendances counter : {this.state.attendances.length}
	  		</div>
	  	</div>
	  );
	}
}

export default Achievements;

import React from 'react';
import { fetchAttendances } from '../APIs/attendances';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	attendances: [],
    };
  }

 componentDidMount = async () => {
    this.refreshAttendances();
  }

  refreshAttendances = async () => {
 		const course_id = this.props.course.id;
    const attendances = await fetchAttendances(course_id);
    this.setState({
      attendances: attendances,
    }); 
  }

  countPercentage = (achievements_num, attendances_num) => {
  	const result = Math.round((achievements_num * 100) / attendances_num);
    return result
  }

  render() {
    const achievements_length = this.props.achievements.length
    const attendances_length = this.state.attendances.length

  	const now = this.countPercentage(achievements_length, attendances_length)
    const currentTeacher = this.props.currentTeacher;

	  return (
	  	<div>
	  		<ProgressBar animated now={ now } label={ isNaN(now) ? `${0}%` : `${now}%`} />
	  	</div>
	  );
	}
}

export default Achievements;

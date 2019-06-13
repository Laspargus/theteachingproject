import React from 'react';
import { fetchAttendances } from '../APIs/attendances';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	attendances: [],
    };
    this.refreshAttendances = this.refreshAttendances.bind(this)
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
    if (achievements_num) {
      return Math.round((achievements_num * 100) / attendances_num);
    } else {
      return 0
    }
  }

  render() {
    
    const achievements_length = this.props.achievements.length
    const attendances_length = this.state.attendances.length

  	const now = this.countPercentage(achievements_length, attendances_length)
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

	  return (
	  	<div>
	  		{progressInstance}<br/>
         achievements_length : {achievements_length}
         <br/>
         attendances_length : {attendances_length}
	  	</div>
	  );
	}
}

export default Achievements;

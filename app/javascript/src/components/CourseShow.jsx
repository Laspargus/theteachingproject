import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class CourseShow extends React.Component {

renderButtons = (currentTeacher) => {
    const { course, toggleEdit, removeAct } = this.props;
    if (currentTeacher) {
      return (
        <span>
          <Link 
            className="m-2 btn btn-success" 
            to={`/courses/${course.id}`}
          > 
            Show
          </Link>
          <button
            className="m-2 btn btn-info"
            role="button"
            tabIndex={0}
            onClick={toggleEdit}
            onKeyPress={toggleEdit}
          >
            Edit
          </button>
  
          <button
            className="m-2 btn btn-danger"
            onClick={removeAct}
            onKeyPress={removeAct}
            role="button"
            tabIndex={0}
          >
            Delete
          </button>
        </span>
      ); 
    } else {
      return (
        <span>
          <Link 
            className="m-2 btn btn-success" 
            to={`/courses/${course.id}`}
          > 
            Show
          </Link>
        </span>
      ); 
    }
    
  };


render() {
    const { course, currentTeacher } = this.props;
    return (
      <React.Fragment>
        <tbody>
          <tr>
            <td scope="row">{course.title}</td>
            <td>{course.description}</td>
            <td>{this.renderButtons(currentTeacher)}</td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}

export default CourseShow;

/* <a className="m-2 btn btn-success" href={'/courses/' + course.id}>Old Show</a> */
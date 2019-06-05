import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class CourseShow extends React.Component {

renderButtons = () => {
    const { course, toggleEdit, toggleDetail, removeAct, currentStudent, currentTeacher} = this.props;
    return (
      <span>
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
        <Link 
          className="m-2 btn btn-success" 
          to={`/courses/${course.id}`}
        > 
          React Show
        </Link>
      </span>
    ); 
  };


render() {
    const { course } = this.props;
    return (
      <React.Fragment>
        <div className="post">
          {course.title} -  {course.description}
            <a className="m-2 btn btn-success" href={'/courses/' + course.id}>Old Show</a>
          {this.renderButtons()}
        </div> 
      </React.Fragment>
    );
  }
}

export default CourseShow;
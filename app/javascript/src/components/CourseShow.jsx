import React from 'react';
import  Hello  from './Hello';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CourseDetail from './CourseDetail';

class CourseShow extends React.Component {

renderButtons = () => {
    const { course, toggleEdit, toggleDetail, removeAct } = this.props;
      return (
        <span>

          <button
            className="m-2 btn btn-success"
            role="button"
            tabIndex={0}
            onClick={toggleDetail}
            onKeyPress={toggleDetail} >
          See Details
          </button>

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

      
              <Link to={`/courses/${course.id}`}> 
                Detail in react
              </Link>
               
       

        
              <Link to='/hello'> 
              Hello              
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
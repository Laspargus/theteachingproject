import React from 'react';

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
      </span>
    ); 
  };


  render() {
    const { course } = this.props;
    return (
      <div className="post">
        {course.title} -  {course.description}
          <a className="m-2 btn btn-success" href={'/courses/' + course.id}>Old Show</a>
        {this.renderButtons()}
      </div>
    );
  }
  
}


export default CourseShow;
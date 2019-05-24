import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

export default class App extends Component {
  render() {

    return (
      <div className="container">
       <div>
          <h1>Création d'un cours :</h1>
          <div>
            <div className="form-group row">    
              <div className="col-sm-10">
                <CourseForm />
                <CourseList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
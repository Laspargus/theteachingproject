import React, { Component } from "react";

export default class CourseEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit,
    });
  };

  render() {
    return(
      <div>
        {this.state.edit && "hah"}
        <button onClick={this.toggleEdit}>{this.state.edit ? "submit" : "update"}</button>
      </div> 
    )
  }
}

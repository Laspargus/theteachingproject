import React from 'react';

class Alert extends React.Component {

  alertClass (type) {
    let classes = {
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info',
      success: 'alert-success'
    };
    return classes[type] || classes.success;
  }

  render() {
    const message = this.props.message;
    const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;
    
    return(
      <div className={ alertClassName }>
        <button className='close'
          data-dismiss='alert'> &times; </button>
        { message.text }
      </div>
    );
  }
}

export default Alert;
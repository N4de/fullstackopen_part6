import React from 'react'
import {connect} from 'react-redux';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification.content}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    notification: state.notification
  };
}

export default connect(mapStateToProps, null)(Notification);
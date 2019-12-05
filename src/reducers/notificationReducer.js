
export const setNotification = (content, delay) => {
  const delayInMilliSeconds = delay * 1000;

  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: content
    })
    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' })
    }, delayInMilliSeconds)
  }
}
  
export const clearNotification = () => {
  return {
    type: 'SET_NOTIFICATION'   
  }
}
  
const initialState = {
    content: 'this here is a notification message'
};

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION': {
      const newContent = action.data;
      return {
          ...state,
          content: newContent
      }
    }
    case 'CLEAR_NOTIFICATION': {
      return {
          ...state,
          content: ''
      }
    }
    default: {
      return state
    }
  }
}
  
  export default notificationReducer;
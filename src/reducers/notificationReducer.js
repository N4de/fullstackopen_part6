
  export const setNotification = (content) => {
    return {
      type: 'SET_NOTIFICATION',
      data: content
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
      default: {
        return state
      }
    }
  }
  
  export default notificationReducer;
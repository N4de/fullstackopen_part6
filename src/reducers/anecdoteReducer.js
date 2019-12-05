import anecdoteService from '../services/anecdoteService';


export const voteForAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.voteAnecdote(anecdote)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE_ANECDOTE': {
      console.log(action.data);
      const id = action.data.id;
      const newAnecdote = action.data
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : newAnecdote  
      );
    }
    case 'NEW_ANECDOTE': {
      console.log(action.data);
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default: {
      return state
    }
  }
}

export default reducer
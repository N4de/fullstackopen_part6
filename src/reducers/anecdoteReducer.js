import anecdoteService from '../services/anecdoteService';


export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    data: {id}
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
      const id = action.data.id;
      const anecdoteToChange = state.find(anecdote => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1 
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote  
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
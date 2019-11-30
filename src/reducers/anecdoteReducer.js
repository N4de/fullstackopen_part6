const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    data: {id}
  }
}

export const newAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(content)
  } 
}

export const initAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data: data
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
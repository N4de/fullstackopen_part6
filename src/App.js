import React from 'react';

import {voteForAnecdote, newAnecdote} from './reducers/anecdoteReducer';

const App = (props) => {
  const anecdotes = props.store.getState();
  const store = props.store;

  const vote = (id) => {
    console.log('vote', id)
    store.dispatch(voteForAnecdote(id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    store.dispatch(newAnecdote(content));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
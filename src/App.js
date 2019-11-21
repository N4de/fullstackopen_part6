import React from 'react';

import {voteForAnecdote, newAnecdote} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';

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
      <AnecdoteForm 
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
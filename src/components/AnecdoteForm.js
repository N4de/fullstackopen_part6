import React from 'react';

const AnecdoteForm = ({handleSubmit}) => (
    <div>
        <h2>create new</h2>
        <form onSubmit={handleSubmit}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
);



export default AnecdoteForm;
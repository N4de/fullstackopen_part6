import React from 'react';
import {newAnecdote} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';
import {connect} from 'react-redux';

const AnecdoteForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        props.newAnecdote(content);
        props.setNotification(`you created ${content}`, 5);
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
            <div><input name="anecdote"/></div>
            <button>create</button>
        </form>
        </div>
    );
}


export default connect(null, {newAnecdote, setNotification})(AnecdoteForm);
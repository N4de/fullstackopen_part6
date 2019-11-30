import React from 'react';
import {newAnecdote} from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import {connect} from 'react-redux';
import anecdoteService from '../services/anecdoteService';

const AnecdoteForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;

        const newAnecdote = await anecdoteService.createAnecdote(content);
        console.log(newAnecdote);
        props.newAnecdote(content);
        props.setNotification(`you created '${content}'`);

        setTimeout(() => {
            props.clearNotification();
        }, 5000);
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

const mapDispatchToProps = (dispatch) => {
    return {
        newAnecdote: value => {
            dispatch(newAnecdote(value));
        },
        setNotification: value => {
            dispatch(setNotification(value));
        },
        clearNotification: () => {
            dispatch(clearNotification());
        }
    }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm);
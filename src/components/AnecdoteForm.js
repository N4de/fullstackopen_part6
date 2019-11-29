import React from 'react';
import {newAnecdote} from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from '../reducers/notificationReducer';
import {connect} from 'react-redux';

const AnecdoteForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
    //     store.dispatch(newAnecdote(content));
    //     store.dispatch(setNotification(`you created '${content}'`));

    //     setTimeout(() => {
    //         store.dispatch(clearNotification());
    //     }, 5000);
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
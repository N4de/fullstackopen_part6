import React from 'react';
import { connect } from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes;
    const vote = (anecdote) => {
        const id = anecdote.id;
        props.voteForAnecdote(id);
        props.setNotification(`you voted '${anecdote.content}'`);

        setTimeout(() => {
            props.clearNotification();
        }, 5000);
      }

    return(
        <div>
            <h2>Anecdotes</h2>
                {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
                )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteForAnecdote: value => {
            dispatch(voteForAnecdote(value))
        },
        setNotification: value => {
            dispatch(setNotification(value));
        },
        clearNotification: () => {
            dispatch(clearNotification());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
import React from 'react';
import { connect } from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes;
    const vote = (anecdote) => {
        props.voteForAnecdote(anecdote);
        props.setNotification(`you voted '${anecdote.content}'`, 5);
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

export default connect(mapStateToProps, {setNotification, voteForAnecdote})(AnecdoteList);
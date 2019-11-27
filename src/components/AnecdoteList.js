import React from 'react';
import { connect } from 'react-redux'
import {voteForAnecdote} from '../reducers/anecdoteReducer';
import {setNotification, clearNotification} from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes;
    console.log(anecdotes);
    const vote = (anecdote) => {
        const id = anecdote.id;
        console.log('vote', id)
        // store.dispatch(voteForAnecdote(id));
        // store.dispatch(setNotification(`you voted '${anecdote.content}'`));

        // setTimeout(() => {
        //     store.dispatch(clearNotification());
        // }, 5000);
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
    console.log(state);
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
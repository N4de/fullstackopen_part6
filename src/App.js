import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

import {initAnecdotes} from './reducers/anecdoteReducer';

const App = (props) => {
  console.log(props);

  useEffect(() => {
    props.initAnecdotes()
  },[props])

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(
  null, { initAnecdotes }
)(App)
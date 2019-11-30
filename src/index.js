import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from './services/anecdoteService';
import {initAnecdotes} from './reducers/anecdoteReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
})

const store = createStore(reducer)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initAnecdotes(anecdotes))
)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
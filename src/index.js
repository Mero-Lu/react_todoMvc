import React from 'react'
import ReactDOM from 'react-dom'
import './base.css'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)

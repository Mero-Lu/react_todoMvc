import React from 'react'
import TodoHead from './containers/TodoHead'
import TodoMain from './containers/TodoMain'
import TodoFooter from './containers/TodoFooter'
class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHead></TodoHead>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}

export default App

import React from 'react'
class TodoHead extends React.Component {
  state = {
    name: ''
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleAdd.bind(this)}
        />
      </header>
    )
  }
  // 添加
  handleAdd(e) {
    if (e.keyCode === 13) {
      this.props.dispatchAdd(this.state.name)
      this.setState({ name: '' })
    }
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }
}

export default TodoHead

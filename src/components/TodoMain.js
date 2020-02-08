import React from 'react'
class TodoMain extends React.Component {
  state = {
    activeId: -1
  }
  render() {
    let { list } = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* completed: 表示完成  editing 表示编辑状态 */}
          {list.map(item => (
            <li
              className={[
                item.completed ? 'completed' : '',
                item.id === this.state.activeId ? 'editing' : ''
              ].join(' ')}
              onDoubleClick={this.handleDuoble.bind(this, item.id)}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => {
                    this.props.dispatchChange(item.id)
                  }}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    this.props.dispatchDel(item.id)
                  }}
                ></button>
              </div>
              <input
                className="edit"
                defaultValue={item.name}
                onKeyUp={this.handleUpdate.bind(this, item)}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
  // 双击事件
  handleDuoble(id) {
    this.setState({ activeId: id })
  }
  // 回车事件
  handleUpdate(item, e) {
    if (e.keyCode === 13) {
      this.props.dispatchUpdate(item.id, e.target.value)
      this.setState({ activeId: -1 })
    }
  }
}
export default TodoMain

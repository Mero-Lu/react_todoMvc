import React from 'react'

class TodoFooter extends React.Component {
  render() {
    let {
      isShowClear,
      count,
      filter,
      isShowFooter,
      dispatchClear,
      dispathcFilter
    } = this.props
    if (!isShowFooter) {
      return null
    }
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={filter === 'show_all' ? 'selected' : ''}
              href="#/"
              onClick={() => dispathcFilter('show_all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={filter === 'show_active' ? 'selected' : ''}
              href="#/active"
              onClick={() => dispathcFilter('show_active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={filter === 'show_completed' ? 'selected' : ''}
              href="#/completed"
              onClick={() => dispathcFilter('show_completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {isShowClear && (
          <button className="clear-completed" onClick={dispatchClear}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}

export default TodoFooter

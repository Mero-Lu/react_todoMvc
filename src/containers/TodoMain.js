import { connect } from 'react-redux'
import { delTodo, changeTodo, updateTodu } from '../actions'
import TodoMain from '../components/TodoMain'
function filterTodos(todos, filter) {
  if (filter === 'show_active') {
    return todos.filter(item => !item.completed)
  } else if (filter === 'show_completed') {
    return todos.filter(item => item.completed)
  } else {
    return todos
  }
}
const mapStateToProps = state => {
  return {
    list: filterTodos(state.todos, state.filter)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatchDel(id) {
      dispatch(delTodo(id))
    },
    dispatchChange(id) {
      dispatch(changeTodo(id))
    },
    dispatchUpdate(id, name) {
      dispatch(updateTodu(id, name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoMain)

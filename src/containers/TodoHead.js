import { addTodo } from '../actions'
import { connect } from 'react-redux'
import TodoHead from '../components/TodoHead'
const mapDispathToProps = dispatch => ({
  dispatchAdd(name) {
    dispatch(addTodo(name))
  }
})
export default connect(null, mapDispathToProps)(TodoHead)

import TodoFooter from '../components/TodoFooter'
import { connect } from 'react-redux'

import { rightClear, filter } from '../actions'

const mapStateToProps = state => ({
  count: state.todos.filter(item => !item.completed).length,
  isShowFooter: state.todos.length > 0,
  isShowClear: state.todos.some(item => item.completed),
  filter: state.filter
})
const mapPatchToProps = dispatch => ({
  dispatchClear() {
    dispatch(rightClear())
  },
  dispathcFilter(value) {
    dispatch(filter(value))
  }
})
export default connect(mapStateToProps, mapPatchToProps)(TodoFooter)

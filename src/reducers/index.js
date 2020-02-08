import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'DEL_TODO':
      return state.filter(item => item.id !== action.id)
    case 'ADD_TODO':
      let newData = {
        name: action.name,
        id: +new Date(),
        completed: false
      }
      return [newData, ...state]
    case 'CHANGE_TODO':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        } else {
          return {
            ...item,
            completed: !item.completed
          }
        }
      })
    case 'UP_DATE_TODO':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        } else {
          return {
            ...item,
            name: action.name
          }
        }
      })
    case 'CLAER_TODO':
      return state.filter(item => !item.completed)
    default:
      return state
  }
}
//  将来如果有多个reducer, redux 中提供了一个方法 combineReducers
function filter(state = 'show_all', action) {
  if (action.type === 'FILTER') {
    return action.value
  }
  return state
}

//  这样就可以联合多个 redux了
let rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer

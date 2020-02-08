import { createStore } from 'redux'
import reducer from '../reducers'
//  在这里可以给redux 设置默认值
// 参数1 : reducer  参数2 默认值
const store = createStore(
  reducer,
  JSON.parse(localStorage.getItem('todos')),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//  保持数据的持久化  使用 redux 的订阅模式
store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()))
})

export default store

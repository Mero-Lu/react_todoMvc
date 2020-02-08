export const delTodo = id => ({
  type: 'DEL_TODO',
  id
})
export const addTodo = name => ({
  type: 'ADD_TODO',
  name
})
export const changeTodo = id => ({
  type: 'CHANGE_TODO',
  id
})
export const updateTodu = (id, name) => ({
  type: 'UP_DATE_TODO',
  id,
  name
})
export const rightClear = () => ({
  type: 'CLAER_TODO'
})

export const filter = value => ({
  type: 'FILTER',
  value
})

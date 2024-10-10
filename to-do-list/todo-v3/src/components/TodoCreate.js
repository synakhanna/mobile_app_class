import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import './styles.css'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()

  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Chores:</label>
      <input type="text" onChange={handleChange} value={title} />=
      <button>Add Todo</button>
    </form>
  )
}

export default TodoCreate

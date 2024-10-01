import {useState} from 'react'
const TodoCreate = (props) => {
    
    const [todo, setTodo] = useState('')

    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" onChange={handleChange} value={todo}/>
            <button>Add Todo</button>
        </form>
    )
}

export default TodoCreate
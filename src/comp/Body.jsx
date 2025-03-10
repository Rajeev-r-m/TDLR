"use clint"
import React from 'react'

const Body = () => {
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [todos, setTodos] = React.useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, { title, desc }])
        setTitle('')
        setDesc('')
        console.log(todos)
    }
// deletion of task
    const deleteTask = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    let renderTask = <h2>NA NANA NA na</h2>

    if (todos.length > 0) {
        renderTask = todos.map((todo, index) => {
            return (
                <li key={index}>
                    <div>
                        <h2>{todo.title}</h2>
                        <h4>{todo.desc}</h4>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" id="title" name="title" />
                </div>
                <hr />
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        id="description" name="description"></textarea>
                </div>
                <hr />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <ul>
                {renderTask}
            </ul>
        </div>
    )
}

export default Body

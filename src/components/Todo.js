import React from 'react';

export default function Todo(props) {
    const updateTodo = (id) => {
        props.SetTodos(todos => todos.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        }))
    }

    return(
        <div className={`Todo ${ props.Completed ? 'completed' : ''}`} onDoubleClick={ () => { updateTodo(props.ID) } }>
            <div>
                <h2 className='Task'>{ props.Task }</h2>
            </div>
            <span onClick={ () => { props.SetTodos(todos => todos.filter(todo => todo.id !== props.ID))}} role="img" aria-label='x'>&#10060;</span>
        </div>
    )
}
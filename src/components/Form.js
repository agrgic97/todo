import { useState } from 'react';
import Error from './Error';

export default function Form(props) {

    const [error, setError] = useState(false);
    const [input, setInput] = useState('');

    const addTodo = () => {       
        props.SetTodos(todos => [...todos,{id:Math.round(Math.random() * 1000), task: input, completed: false}])
    }

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        if(input !== '') {
            addTodo();
            setError(false);
        }
        else {
            setError(true);
        }
    }

    return(
        <form className='Form'>           
            <div className='Form-Group'>
                <input value={ input } type="text" name='task' placeholder='Add new Task...' onChange={ (e) => updateInput(e) }/>
                {
                    error ? <Error>Please enter a task</Error> : ""
                }
            </div>
            <button className='Save-Button' type="button" onClick={ (e) => handleSubmit() }>Save</button>
        </form>
    )
}
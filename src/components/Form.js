import React,{ useState } from 'react';
import Error from './Error';

import { database } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export default function Form(props) {

    const [error, setError] = useState(false);
    const [input, setInput] = useState('');

    const addTodo = async ()  => {       
        const collectionRef = collection(database, "todos");
        const payload = { task: input, completed: false };
        await addDoc(collectionRef, payload);
    }

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = async () => {
        if(input !== '') {
            await addTodo();
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
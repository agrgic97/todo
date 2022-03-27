import React from 'react';
import { database } from '../firebase-config';
import { setDoc, deleteDoc, doc } from 'firebase/firestore'; 

export default function Todo(props) {
    const updateTodo = async (id) => {
        const docRef = doc(database, "todos", id);
        const payload = { task: props.Task ,completed: !props.Completed };
        
        await setDoc(docRef, payload);
    }

    const deleteTodo = async (id) => {
        const docRef = doc(database, "todos", id);

        await deleteDoc(docRef);
    }

    return(
        <div className={`Todo ${ props.Completed ? 'completed' : ''}`} onDoubleClick={ () => updateTodo(props.ID) }>
            <div>
                <h2 className='Task'>{ props.Task }</h2>
            </div>
            <span onClick={ () => deleteTodo(props.ID) } role="img" aria-label='x'>&#10060;</span>
        </div>
    )
}
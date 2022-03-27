import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Form from './components/Form';
import Filter from './components/Filter';
import './App.css';

import { database } from './firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    onSnapshot(collection(database, "todos"), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    });
  },[]);

  return(
    <div className='App'>
      <Header SetButtonClicked={ setButtonClicked } 
              ButtonClicked={ buttonClicked }>My Todo List</Header>
      <div>
        { buttonClicked ? <Form SetTodos={ setTodos }></Form> : "" }
      </div>
      <Filter SetFilter={ setFilter }></Filter>
      <Todos Todos={ todos }
             SetTodos={ setTodos }
             Filter={ filter }
             SetFilter={ setFilter }></Todos>
    </div>
  )
}

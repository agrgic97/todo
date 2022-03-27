import { useState, useEffect } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Form from './components/Form';
import Filter from './components/Filter';
import './App.css';


export default function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('All');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

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

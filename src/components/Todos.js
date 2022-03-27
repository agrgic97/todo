import React,{ useState, useEffect } from 'react';
import Todo from './Todo';

export default function Todos(props) {

    const [filteredTodos, setFilteredTodos] = useState([...props.Todos]);

    useEffect(() => {
        setFilteredTodos([...props.Todos]);

        switch(props.Filter) {
            case 'All':
                setFilteredTodos([...props.Todos]);
                break;
            case 'Completed':
                setFilteredTodos(filteredTodos => filteredTodos.filter(todo => todo.completed));
                break;
            case 'Uncompleted':
                setFilteredTodos(filteredTodos => filteredTodos.filter(todo => !todo.completed));
                break;
            default:
                setFilteredTodos([...props.Todos]);
        }
    },[props.Filter, props.Todos]);

    return(
        <div className='Todos'>
            { filteredTodos.map(todo => {
                return <Todo key={ todo.id }
                             ID={ todo.id }
                             Task={ todo.task }
                             Completed={ todo.completed }
                             Todos={ props.Todos }
                             SetTodos={ props.SetTodos }></Todo>
            })}
        </div>
    )
}
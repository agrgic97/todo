import React from 'react';
import AddTodo from "./AddTodo";

export default function Header(props) {
    return(
        <div className="Header">
            <h1>{ props.children }</h1>
            <AddTodo SetButtonClicked={ props.SetButtonClicked } ButtonClicked={ props.ButtonClicked }>Add Todo</AddTodo>
        </div>
    )
}
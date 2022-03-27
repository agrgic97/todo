import React from 'react';

export default function AddTodo(props) {
    return(
        <button className={`Add-Todo ${ props.ButtonClicked ? "clicked" : ""}`} onClick={ () => { props.SetButtonClicked(clicked => !clicked) } } href="">{ props.ButtonClicked ? `Cancel` : `Add Todo` }</button>
    )
}
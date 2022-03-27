export default function AddTodo(props) {
    return(
        <a className={`Add-Todo ${ props.ButtonClicked ? "clicked" : ""}`} onClick={ () => { props.SetButtonClicked(clicked => !clicked) } } href>{ props.ButtonClicked ? `Cancel` : `Add Todo` }</a>
    )
}
export default function Filter(props) {
    return(
        <select className='Filter' onChange={ (e) => { props.SetFilter(filter => e.target.value) } }>
            <option>All</option>
            <option>Completed</option>
            <option>Uncompleted</option>
        </select>
    )
}
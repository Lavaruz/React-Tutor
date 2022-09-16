function Introduction(props){
    return (
        <>
            <h3>Introduce</h3>
            <p>My Name is : {props.name}</p>
            <p>I'am {props.age} years old</p>
            <p>{props.status}</p>
        </>
    )
}

export default Introduction
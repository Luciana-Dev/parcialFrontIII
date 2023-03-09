function Card (props) {
    console.log(props)
    return(
        <div className={props.className}>
            {props.children}

        </div>
    )
}

export default Card
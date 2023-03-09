import styles from './Header.module.css'

function Header (props){
    console.log(styles)
    return <header className= {styles.header}>{props.title}</header>
}

export default Header
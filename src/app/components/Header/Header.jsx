import styles from './Header.module.css'

const Header = ()=>{
    return(
        <header>
            <div className={styles.container}>
                <img src="/asserts/headerLogo.png" alt="headerlogo" className={styles.imgLogo} />
            </div>
        </header>
    )
}

export default Header
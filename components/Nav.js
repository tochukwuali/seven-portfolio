import MobileIcon from './MobileIcon'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                  <h3>TC</h3>
                </div>
              <div className={styles.nav__desktop}></div>
              <MobileIcon/>  
            </nav>
            
        </div>
    )
}

export default Nav

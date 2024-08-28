import styles from "./Header.module.css"

const Header = ({children}) =>{
  return(
    <div className={styles.navHead}>
      {children}
    </div>
  )   
}


export default Header
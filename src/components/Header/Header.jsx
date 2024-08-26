import "./Header.css"

const Header = ({children}) =>{
  return(
    <div className="nav_head">
      {children}
    </div>
  )   
}


export default Header
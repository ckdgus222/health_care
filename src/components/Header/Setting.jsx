import "./Setting.css"


// react-router 처리 **

const Setting = () =>{
  return(
   <div className="mainContainer">
      <div className="userLogin">
         홍간호님 로그인 중
         <span><img className="icon-logout" src="/images/menu-icon/logout.png"/></span>
      </div>
      <div className="nav">
         <span><img src="/images/menu-icon/alert.png" alt="" /></span>
         <span><img src="/images/menu-icon/config.png" alt="" /></span>
         <span><img src="/images/menu-icon/home.png" alt="" /></span>
      </div>
   </div>
  )
}

export default Setting
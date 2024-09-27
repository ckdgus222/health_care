

export const select = (item)=>{
   switch (item){
      case "환자정보":
         return "516px"
      case "예약관리":
         return "450px"
      case "처치관리":
         return "383px"
      case "연결관리":
         return "317px"
      case "i-care":
         return "260px"
      default:
         return null
   }
 }




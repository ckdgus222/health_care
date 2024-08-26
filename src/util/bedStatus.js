

export const bedStatus = (data)=>{
   switch(data){
      case "00":
         return "00.png";
      case "01":
         return "01.png";
      case "10":
         return "10.png";
      case "11":
         return "11.png";
      case "22":
         return "22.png"
      default :
         return null
   }
}
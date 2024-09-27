

export const menuFilter=(data,category)=>{
   switch (category) {
      case "난간":
        return data.filter((item) => item.barStatus !== "00");
      case "수액G":
        return data.filter((item) => item.fluid_status === "G");
      case "수액A":
        return data.filter((item) => item.fluid_status === "A");
      case "수액C":
        return data.filter((item) => item.fluid_status === "C");
      case "산소":
        return data.filter((item) => item.oxygenYes === 1);
      case "I-care":
         return data.filter((item) => item["I-care"] === 1);
      default:
        return data;
    }
}

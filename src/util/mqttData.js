

export const poseData = (pose) => {
    switch (pose) {
      case "p02_suhh":
        return "m10a";
      case "p08_rshh":
        return "m11a";
      case "p06_lshh":
        return "m12a";
      case "p04_buhh":
        return "m13a";
      case "p10_sith":
        return "m21s";
      case "p11_sitf":
        return "m22s";
      default:
        return "defaultImage";
      // defulet 추가
    }
  };

export const barData = (rail) => {
    switch (rail) {
      case "r01_rail(00)":
        return "00";
      case "r02_rail(10)":
        return "10";
      case "r03_rail(01)":
        return "01";
      case "r04_rail(11)":
        return "11";
      default:
        return "00";
      // defulet 추가
    }
  };


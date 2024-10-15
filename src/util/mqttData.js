const poses = {
  "p02_suhh": "m10a",
  "p08_rshh": "m11a",
  "p06_lshh": "m12a",
  "p04_buhh": "m13a",
  "p10_sith": "m21s",
  "p11_sitf": "m22s",
}
export const poseData = (pose) =>  poses[pose] || null


const bar = {
  "r01_rail(00)" : "00",
  "r02_rail(10)" : "10",
  "r03_rail(01)" : "01",
  "r04_rail(11)" : "11",
}

export const barData = (rail) => bar[rail] || "00"


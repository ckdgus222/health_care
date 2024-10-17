import React from "react";
import PatientSettings from "./PatientSettings.jsx";
import ClinicInf from "./ClinicInf.jsx";
import NotificationSettings from "./NotificationSettings.jsx";
import useToggleMenu from "../../../hooks/useToggleMenu";

const SideMenu = ({setFooterMessage}) => {
  const {select,animation,toggleMenu} = useToggleMenu()



  return (
    <>
      <PatientSettings option={{ select, animation, toggleMenu }} />
      <ClinicInf option={{ select, animation, toggleMenu,setFooterMessage }} />
      <NotificationSettings option={{select,animation,toggleMenu}}/>
    </>
  );
};

export default SideMenu;

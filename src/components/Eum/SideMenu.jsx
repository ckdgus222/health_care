import React from "react";
import PatientSettings from "./components/PatientSettings";
import ClinicInf from "./components/ClinicInf";
import NotificationSettings from "./components/NotificationSettings";
import useToggleMenu from "../../hooks/useToggleMenu";

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

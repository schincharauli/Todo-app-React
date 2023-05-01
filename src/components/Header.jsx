import React from "react";
import SwitchToDarkIcon from "../assets/images/icon-moon.svg";
import SwitchToLightIcon from "../assets/images/icon-sun.svg";

const Header = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? SwitchToDarkIcon : SwitchToLightIcon;

  const changeTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <header className="header">
      <p>TODO</p>
      <button className="btn switch-theme-btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;

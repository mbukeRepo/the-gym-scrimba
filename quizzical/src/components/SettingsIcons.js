/* eslint-disable linebreak-style */
import { memo } from "react";
import PropTypes from "prop-types";
import {
  Home as HomeIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from "react-feather";

const SettingsIcons = ({
  toggleIsHome,
  theme,
  toggleTheme,
  showHomeIcon = true,
}) => {
  const lightTheme = theme === "light";
  return (
    <>
      <HomeIcon
        className="icon homeIcon"
        onClick={toggleIsHome}
        size={30}
        style={{ display: showHomeIcon ? "inline" : "none" }}
      />

      {lightTheme ? (
        <SunIcon className="icon sunIcon" size={30} onClick={toggleTheme} />
      ) : (
        <MoonIcon className="icon moonIcon" size={30} onClick={toggleTheme} />
      )}
    </>
  );
};

SettingsIcons.propTypes = {
  toggleIsHome: PropTypes.func,
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
  showHomeIcon: PropTypes.bool,
};

export default memo(SettingsIcons);

import React, { useState } from 'react';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material/';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <p>Logo</p>
      <nav>
        <ul>
          <li>Me</li>
          <li>FrameWorks</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <IconButton onClick={ handleDarkMode }>
        { isDarkMode ? <LightModeIcon /> : <NightsStayIcon /> }
      </IconButton>
    </header>
  );
}

export default Header;

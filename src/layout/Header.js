import React, { useEffect, useState } from 'react';
import useWindowEvent from '../hooks/useWindowEvent';
import './layout.css'

const Header = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 1) {
      setFixedNavbar(true);
    }

    if (window.scrollY > 90) setFixedNavbar(true);
    else setFixedNavbar(false);
  };

  useWindowEvent("scroll", handleScroll, window);

  return (
    <div className={`h-16 bg-sky-600 ${fixedNavbar ? 'fixedNavbar' : ''}`}>
      HEADER
    </div>
  );
}

export default Header;

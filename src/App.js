import React, { useEffect } from 'react';
import './styles/styles.css';
import { useLocation } from 'react-router';
import Navigation from './routes';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;

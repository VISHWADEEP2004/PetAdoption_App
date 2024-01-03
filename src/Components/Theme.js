import React from 'react';
import { useTheme } from './Components/Themecontest';

function Theme() {
  const { theme, toggleTheme } = useTheme();
  const handleToggle = () => {
    toggleTheme(); 
  };
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
export default Theme;

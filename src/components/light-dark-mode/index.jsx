import React from 'react'
import UseLocalStorage from './UseLocalStorage';
import './theme.css';

const LightDarkMode = () => {
  
  const [theme,setTheme] = UseLocalStorage('theme','dark');
  const HandleToggleTheme = () =>{
    setTheme(theme === 'light'?'dark':'light');
    console.log(theme);
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <h2>Light dark mode</h2>
            <button onClick={HandleToggleTheme}>Change theme</button>
        </div>
    </div>
  )
}

export default LightDarkMode;
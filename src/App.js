import './App.css';
import TopBar from './components/TopBar.jsx';
import { ThemeProvider, Box } from '@mui/material';
import { myTheme } from './theme';
import Movies from "./components/Movies";

import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <TopBar />
        <Movies />
      </ThemeProvider>
    </div>
  );
}

export default App;

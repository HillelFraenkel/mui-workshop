import './App.css';
import TopBar from './components/TopBar.jsx';
import { ThemeProvider, Box } from '@mui/material';
import { myTheme } from './theme';

import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <TopBar />
    </div>
  );
}

export default App;

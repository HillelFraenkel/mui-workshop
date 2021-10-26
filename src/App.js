import './App.css';
import TopBar from './components/TopBar.jsx';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <TopBar />
      </ThemeProvider>
    </div>
  );
}

export default App;

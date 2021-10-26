import './App.css';
import TopBar from './components/TopBar.jsx';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './theme';
import Movies from "./components/Movies";

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

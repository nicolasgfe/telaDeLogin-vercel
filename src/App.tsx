
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Register } from './pages/Register';
import { SigIn } from './pages/SigIn';
import { Router } from './routes/Router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} >
        <BrowserRouter >
          <Router/>
        </BrowserRouter>

        <GlobalStyles/>
      </ThemeProvider>
    </>
  );
}

export default App;

import Navbar from 'components/navbar';
import Main from 'pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from 'styles/GlobalStyle';

function App() {
  return <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </ThemeProvider>
  </Router>
}

export default App;

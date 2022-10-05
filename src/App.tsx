import Navbar from 'components/navbar';
import SideMenu from 'components/navbar/SideMenu';
import Main from 'pages/main';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from 'styles/GlobalStyle';

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar setIsSideOpen={setIsSideOpen} />
      <SideMenu isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </ThemeProvider>
  </Router>
}

export default App;

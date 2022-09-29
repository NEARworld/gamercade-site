import Navbar from 'components/navbar';
import Main from 'pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return <Router>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </Router>
}

export default App;

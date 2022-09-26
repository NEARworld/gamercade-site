import Navbar from 'components/navbar';
import Main from 'pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </Router>
}

export default App;

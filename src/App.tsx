import Main from 'pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </Router>
}

export default App;

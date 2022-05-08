import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import './App.css';

const Hats = () => {
  return <h2>HATS</h2>;
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<Hats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

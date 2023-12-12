import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/views/Home';
import About from '@/views/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

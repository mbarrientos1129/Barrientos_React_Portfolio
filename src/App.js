import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

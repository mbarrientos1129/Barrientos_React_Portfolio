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
            <Route exact path="/" element={<About/>} />
            <Route exact path="/Portfolio" element={<Portfolio/>} />
            <Route exact path="/Contact" element={<Contact/>} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

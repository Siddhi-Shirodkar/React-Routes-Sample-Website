import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import Navbar from './components/navbar';
import Background from './components/Background'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Nopage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

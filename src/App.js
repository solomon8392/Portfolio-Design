import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavbarPage/NavbarPage';
import AboutPage from './ProjectPages/AboutPage';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="aboutpage" element={<AboutPage />} />
   </Routes>
  );
}

export default App;

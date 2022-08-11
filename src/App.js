import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/resources" element={<Resources/>} />

      <Route path="/signup" element={<Signup/>} />
      <Route path="/landing" element={<Landing/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

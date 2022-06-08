import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/landing" element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

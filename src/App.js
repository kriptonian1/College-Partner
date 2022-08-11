import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/resources" element={<Resources/>} />

      <Route path="/signup" element={<Signup/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

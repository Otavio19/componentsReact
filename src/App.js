import logo from './logo.svg';
import './App.css';
import Authentic from './components/authentic';
import Button from './components/button'
import NavBar from './components/navbar'
import Main from './pages/main'
import ProductsList from './pages/productsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <NavBar />
  <div className="content">
    <Outlet />
  </div>
</div>
  );
}

export default App;
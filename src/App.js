import logo from './logo.svg';
import Login from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/DashboardPage/DashboardPage';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from 'react';


function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Login />}></Route>
        {token && (<Route path='/admin/dashboard/' element={<Dashboard />}></Route>)}

      </Routes>
        
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import './components/navbar.css'
import { Home } from './pages/Home.js'
import { Login } from './pages/Login.js'
import { List } from './pages/List.js'
import { Register } from './pages/Register.js'
import { RegisterDelivery } from './pages/RegisterDelivery.js'
import { RegisterRest } from './pages/RegisterRest.js'
import { NavLinkComp } from "./components/NavLinkComp";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('user')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleClick = () => {
  };

  const handleLogout = () => {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
    setUser(null)
  };

  const renderLinkLogin = () => {
    return <NavLinkComp to="/login" onClick={handleClick}>Iniciar Sesión</NavLinkComp>
  }

  const renderUser = () => {
    return (
      <>
      <NavLinkComp to="/usuario">{user.nombre}</NavLinkComp>
      <NavLinkComp to="/" onClick={handleLogout}>Cerrar sesión</NavLinkComp>
      </>
    )
  }


    return (
    <main>
    <BrowserRouter>
      <nav className="Navbar">
          <NavLinkComp to="/" className="nav-logo">
            <h4>FOOD&ENJOY</h4>
          </NavLinkComp>
          {
            user
            ? renderUser()
            : renderLinkLogin()
          }
          <NavLinkComp to="/register/user" onClick={handleClick}>Registro</NavLinkComp>
          <NavLinkComp to="/register/delivery" onClick={handleClick}>Quiero ser repartidor</NavLinkComp>
          <NavLinkComp to="/register/restaurant" onClick={handleClick}>Añadir Restaurante</NavLinkComp>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register/user' element={<Register/>}></Route>
        <Route path='/register/delivery' element={<RegisterDelivery/>}></Route>
        <Route path='/register/restaurant' element={<RegisterRest/>}></Route>

        <Route path='/restaurantes' element={<List/>}></Route>
        <Route path='/usuario' element={<h1>hola</h1>}></Route>

      </Routes>

    </BrowserRouter>
    </main>
  );
}

export default App;

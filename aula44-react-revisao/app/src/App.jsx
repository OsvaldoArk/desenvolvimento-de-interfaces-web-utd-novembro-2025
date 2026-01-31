import { Routes,Route, Link } from 'react-router'
import Class from './pages/Class'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Users from './pages/Users'
import UsuarioView from './pages/UsuarioView'
import SubscriptionForm from './pages/SubscriptionForm'
import './App.css'
import { useState } from 'react'

function App() {

  const [usuario,setUsuario] = useState({});

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">início</Link></li>
          <li><Link to="class">cursos</Link></li>
          <li><Link to="users">usuários</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/class" element={<Class />} />
        <Route path="/users" element={<Users />}>
          <Route index element={<UsuarioView estado={usuario} />} />
          <Route path="add" 
                 element={
                          <SubscriptionForm 
                              estado={usuario} 
                              metodo={setUsuario}
                          />
                         }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App

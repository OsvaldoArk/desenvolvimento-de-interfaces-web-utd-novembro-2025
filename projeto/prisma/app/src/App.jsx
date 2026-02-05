import Grid from '@mui/material/Grid';
import UsuarioEdit from './pages/usuarios/UsuariosEdit';
import UsuariosForm from './pages/usuarios/UsuariosForm';
import UsuarioList from './pages/usuarios/UsuariosList';
import UsuariosMain from './pages/usuarios/UsuariosMain';
import { Routes,Route } from 'react-router';
import Nav from './components/Nav';
import Aside from './components/Aside';
import './App.css';

function App() {

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{md:12, xs:12}}>
          <Nav />
        </Grid>
        <Grid size={{md:3, xs:3}}>
          <Aside />
        </Grid>
        <Grid size={{md:9, xs:9}}>
          <Routes>
            <Route path="/usuarios" element={<UsuariosMain />}>
              <Route index element={<UsuarioList />} />
              <Route path="edit/:alunoId" element={<UsuarioEdit />} />
              <Route path="add" element={<UsuariosForm />} />
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export default App

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ImBook } from "react-icons/im";
import { ImCtrl } from "react-icons/im";
import { ImEye } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { ImPlus } from "react-icons/im";
import { ImUsers } from "react-icons/im";
import { Link } from 'react-router';
import { useState } from 'react';
import './Aside.css';

function Aside(){

    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <List
      sx={{ width: '90%', maxWidth: 360, fontSize:'1rem' }}
      component="nav"
    >
      <ListItemButton>
        <ListItemIcon>
            <ImBook />
        </ListItemIcon>
        <ListItemText className='barra-lateral' primary="Cursos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
            <ImHome />
        </ListItemIcon>
        <ListItemText primary="Unidades" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
            <ImUsers />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
        {open ? <ImCtrl /> : <ImCtrl style={{transform:'scaleY(-1)'}} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/usuarios/add">
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                    <ImPlus />
                </ListItemIcon>
                <ListItemText primary="add usuários" />
            </ListItemButton>
          </Link>
          <Link to='/usuarios'>
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                    <ImEye />
                </ListItemIcon>
                <ListItemText primary="listar usuários" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List> 
    );
}

export default Aside;
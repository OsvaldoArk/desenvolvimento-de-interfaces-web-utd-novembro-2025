import {Link} from 'react-router';
import './Nav.css';

function Nav(){

    return(
        <>
            <header className='header-container'>
                <h4>PROJETO FINAL</h4>
                <nav className="navegacao">
                    <ul>
                        <li>
                            <Link>INÍCIO</Link>
                        </li>
                        <li>
                            <Link>CURSOS</Link>
                        </li>
                        <li>
                            <Link>FALE CONOSCO</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Nav;
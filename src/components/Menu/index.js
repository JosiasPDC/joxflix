import React from 'react';

import Logo from '../../assets/img/JoxFlix.png';
import './Menu.css';
import{
  Link
} from 'react-router-dom';

//Depois de fazer o import do styled-component
import Button from '../Button/index';

//Antes de fazer o import do styled-component
//import ButtonLink from './ButtonLink/index';

function Menu() {
    return (
        <nav className="Menu">
            <Link href="/">
                <img src={Logo} className="Logo" alt="JoxMiroFlix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
        </nav>
    );
}

export default Menu;
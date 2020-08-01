import React from 'react';
import Logo from '../../assets/img/JoxFlix.png';
import './Menu.css';
import Button from '../Button/index';
//import ButtonLink from './ButtonLink/index';
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="JoxMiroFlix" />
            </a>
            <Button as="a" className="ButtonLink" href="">
                Novo vídeo
            </Button>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
        </nav>
    );
}

export default Menu;
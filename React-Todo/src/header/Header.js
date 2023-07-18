import React from 'react'

import './Header.css'
import imagem from './img/globo.png'

const Header = () => (
    <header className="app-header">
        <div>
             <span className="app-header__logo">
            <img src={imagem} alt="imagem"/>
        </span>
            <span className="app-header__title">SIG - Sistema Integrado de Gestão</span>
        </div>
    </header>
)

export default Header



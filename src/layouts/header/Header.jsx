import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="logo">
                <img src='../img/logo.svg' alt='logo sportsee' />
            </div>
            <h1>SportSee</h1>
            <nav>
                <Link to='/' >Acceuil</Link>
                <Link to='user/:userId' >Profil</Link>
                <Link to='settings' >Réglage</Link>
                <Link to='community' >Communauté</Link>
            </nav>
        </header>
    )
}

export default Header
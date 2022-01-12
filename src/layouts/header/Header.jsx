import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  
    const location = useLocation().pathname;
    const id = location.replace(/[^0-9]/g, "");
    const [userPath, setUserPath] = useState();

    useEffect(() => {
        setUserPath("user/" + id);
    }, [id])

    return (
        <header>
            <div className="logo">
                <img src='/img/logo.svg' alt='logo sportsee' />
            </div>
            <h1>SportSee</h1>
            <nav>
                <Link to={'/'} >Accueil</Link>
                <Link to={`${userPath}`} >Profil</Link>
                <Link to='error' >Réglage</Link>
                <Link to='error' >Communauté</Link>
            </nav>
        </header>
    )
}

export default Header
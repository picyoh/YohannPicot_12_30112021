import React from 'react'
import { Link } from 'react-router-dom'

function Aside(){
    return(
        <aside>
            <div className="sideNav">
                <Link to='user/:userId'>
                    <img src='../img/meditate.png' alt='meditate' />
                </Link>
                <Link to='user/:userId'>
                    <img src='../img/swimming.png' alt='swimming' />
                </Link>
                <Link to='user/:userId'>
                    <img src='../img/cycling.png' alt='cycling' />
                </Link>
                <Link to='user/:userId'>
                    <img src='../img/fitness.png' alt='fitness' />
                </Link>
            </div>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}

export default Aside
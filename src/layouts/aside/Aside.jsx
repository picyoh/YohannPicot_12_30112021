import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Aside() {

    const location = useLocation().pathname;
    const id = location.replace(/[^0-9]/g, "");
    const [userPath, setUserPath] = useState();

    useEffect(() => {
        setUserPath("user/" + id);
    }, [id])

    return (
        <aside>
            <div className="sideNav">
                <Link to={`${userPath}/activity`}>
                    <img src={process.env.PUBLIC_URL + '/img/meditate.png'} alt='activity' />
                </Link>
                <Link to={`${userPath}/average-sessions`}>
                    <img src={process.env.PUBLIC_URL + '/img/swimming.png'} alt='average-sessions' />
                </Link>
                <Link to={`${userPath}/performance`}>
                    <img src={process.env.PUBLIC_URL + '/img/cycling.png'} alt='performances' />
                </Link>
                <Link to={`${userPath}/score`}>
                    <img src={process.env.PUBLIC_URL + '/img/fitness.png'} alt='score' />
                </Link>
            </div>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}

export default Aside
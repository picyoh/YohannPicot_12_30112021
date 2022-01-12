import React, { useState, useEffect } from 'react';

import { getMainData } from './../../services/dataManager';

function Banner({id}) {
    // Get firstname
    const [isLoading, setLoading] = useState(true)
    const [firstName, setFirstName] = useState();

    useEffect(() => {
        setFirstName(getMainData(id, 'firstName'))
        setLoading(false);
    }, [id]);

    if (isLoading) return <div className="loading">Loading</div>
    return (
        <article className='banner'>
            <h2>Bonjour&nbsp;
                <span>{firstName}</span>
            </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏.</p>
        </article>
    );
}

export default Banner
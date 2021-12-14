import React, { useState, useEffect } from 'react';

import { getMainData } from './../../services/dataManager';

function Banner(props) {
    const id = props.id;
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        setFirstName(getMainData(id, 'firstName'))
    }, [id]);

    return (
        <article className='banner'>
            <h2>Bonjour&nbsp;
                <span>{ firstName }</span>
            </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏.</p>
        </article>
    );
}

export default Banner
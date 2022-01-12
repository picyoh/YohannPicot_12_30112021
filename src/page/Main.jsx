import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import Banner from '../layouts/banner/Banner'
import Charts from '../layouts/charts/Charts'

function Main(){
  const user = useParams()
  const id = parseInt(user.userId);

    return(
        <section className='main'>
          <Banner id ={ id } />
          <Charts id ={ id } />
        </section>
    )
}

Main.propTypes = {
  userId: PropTypes.number
}

export default Main
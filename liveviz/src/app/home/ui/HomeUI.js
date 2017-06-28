import React from 'react'
import PropTypes from 'prop-types'
import Connection from '../logic/Connection';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'styles/App.css'

const HomeUI = () =>
    (
        <div className="fullHeight text-center">
            <Connection/>
        </div>
    )

HomeUI.propTypes = {
    url: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    graphKey: PropTypes.number.isRequired,
}

export default HomeUI

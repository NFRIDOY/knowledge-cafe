// import React from 'react'
import PropTypes from 'prop-types'; // ES6

export default function Header(props) {
    const {title} = props;
    return (
        <>
            <h1 className='bg-blue-600 text-6xl'>{title}</h1>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
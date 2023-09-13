// import React from 'react'
import PropTypes from 'prop-types'; // ES6
import profile from '../../assets/images/profile.png';


export default function Header(props) {
    const {title} = props;
    return (
        <>
            <div className='flex flex-row justify-between mx-28'>
            <h1 className=' text-6xl'>{title}</h1>
            <img src={profile} alt="profile" />
            </div>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
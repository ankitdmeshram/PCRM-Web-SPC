import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Footer = () => {
    const { appData } = useContext(AppContext)
    return (
        <ul className="nav justify-content-center">
            {!appData.isLoggedIn && (
                <>
                    <li className="nav-item">
                        <Link to={"/signin"} className='nav-link'>Sign In </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/signup"} className='nav-link'>Sign Up </Link>
                    </li>
                </>
            )}
            <li className="nav-item">
                <Link to={"/terms-and-conditions"} className='nav-link'>Terms And Conditions </Link>
            </li>
        </ul>
    )
}

export default Footer
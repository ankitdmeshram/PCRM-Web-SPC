import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Header = () => {
    const { appData, setAppData } = useContext(AppContext)
    return (
        <>
            <nav className="header navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid ps-4">

                    <Link className="navbar-brand" to={appData?.isLoggedIn ? "/dashboard" : "/"}>PCRM Web</Link>

                    <span className="navbar-toggler-icon" onClick={() => {
                        setAppData({ ...appData, sidebarOpen: !appData.sidebarOpen })
                    }}></span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
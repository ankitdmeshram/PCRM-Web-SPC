import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../../Actions/Functions'
import Sidebar from '../../Components/Sidebar'
import "../../Styles/dashboard.css"

const Dashboard = () => {
    const { appData, setAppData } = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        console.log("appDataappDataappDataappData", appData)
        checkIsLoggedIn()

        setAppData(prev => {
            return {
                ...prev,
                sidebarOpen: false
            }
        })
    }, [])

    const checkIsLoggedIn = async () => {
        let response = await isLoggedIn()
        console.log("response", response)
        if (!response) {
            navigate("/signin")
        }
    }

    return (
        <>
            <div className="bg-back h-100vh">
                <div className="main">
                    <Sidebar />
                    <div className="main-body">
                        <div className="box shadow-sm">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
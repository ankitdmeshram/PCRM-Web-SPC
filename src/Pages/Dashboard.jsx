import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../Actions/Functions'
import Sidebar from '../Components/Sidebar'
import "../Styles/dashboard.css"

const Dashboard = () => {
    const { appData } = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        console.log("appDataappDataappDataappData", appData)
        checkIsLoggedIn()
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
                            <p><strong>Welcome to Your Project Tracker Dashboard!</strong></p><p></p><p>We’re excited to have you here as you embark on a journey to streamline and manage your projects efficiently.</p><p></p><p><strong>What's Next?</strong></p><p></p><p>While we're working on adding some great features, here's what you can do to get started:</p><p></p><ol><li><span></span><strong>Create Your First Project</strong>: Start by organizing your work into projects and add tasks to track progress.</li><li><span></span><strong>Manage Tasks</strong>: Stay on top of things by updating task statuses as completed, in-progress, or not started.</li><li><span></span><strong>Explore Features</strong>: More functionalities are coming soon, like project analytics, reports, and team collaboration tools.</li></ol><p></p><p>Check back regularly for updates as we build out the dashboard. In the meantime, feel free to explore and start managing your tasks!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
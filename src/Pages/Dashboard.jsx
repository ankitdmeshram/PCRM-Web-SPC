import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../Actions/Functions'

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
        if(!response) {
            navigate("/signin")
        }
    }

    return (
        <div>Dashboard

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <td>{appData?.user?.fname} {appData?.user?.lname}</td>
                    </tr>
                </thead>
            </table>


        </div>
    )
}

export default Dashboard
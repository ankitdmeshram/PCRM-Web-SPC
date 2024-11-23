import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Dashboard = () => {
    const { appData } = useContext(AppContext)

    return (
        <div>Dashboard

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <td>{appData?.user?.name}</td>
                    </tr>
                </thead>
            </table>


        </div>
    )
}

export default Dashboard
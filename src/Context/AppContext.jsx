import React, { createContext, useEffect, useState } from 'react'
import { getCookie } from '../Utils/common'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({
        isLoggedIn: false,
        user: {},
        sidebarOpen: false,
        projects: [
            {
                "_id": "6739fcaf620b1f1d69c09428",
                "projectName": "Sales",
                "description": "",
                "startDate": null,
                "endDate": null,
                "dueDate": null,
                "status": "",
                "createdBy": "67016a5e34b40ece3c3b3cfc",
                "createdAt": "2024-11-17T14:24:47.315Z",
                "tags": [],
                "history": [],
                "member": [
                    {
                        "userId": "67016a5e34b40ece3c3b3cfc",
                        "role": "admin"
                    }
                ],
                "updatedAt": "2024-11-17T14:24:47.316Z",
                "__v": 0
            },
            {
                "_id": "6738e272b9aadfc06544b7db",
                "projectName": "Brokod",
                "description": "<p>Reference Website - https://samar.dexignzone.com/django/demo/index-5.html</p>",
                "startDate": null,
                "endDate": null,
                "dueDate": null,
                "status": "",
                "createdBy": "67016a5e34b40ece3c3b3cfc",
                "createdAt": "2024-11-16T18:20:34.084Z",
                "tags": [],
                "history": [],
                "member": [
                    {
                        "userId": "67016a5e34b40ece3c3b3cfc",
                        "role": "admin"
                    }
                ],
                "updatedAt": "2024-11-16T18:20:34.084Z",
                "__v": 0
            },
            {
                "_id": "67373daac0c1a3171d57500d",
                "projectName": "PCRM Management System For Clients",
                "description": "",
                "startDate": null,
                "endDate": null,
                "dueDate": null,
                "status": "",
                "createdBy": "67016a5e34b40ece3c3b3cfc",
                "createdAt": "2024-11-15T12:25:14.481Z",
                "tags": [],
                "history": [],
                "member": [
                    {
                        "userId": "67016a5e34b40ece3c3b3cfc",
                        "role": "admin"
                    }
                ],
                "updatedAt": "2024-11-15T12:25:14.481Z",
                "__v": 0
            },
            {
                "_id": "6706bce4cce8f84cf057dfe9",
                "projectName": "Nilofer E-Commerce Website",
                "description": "<p><strong>Payment</strong></p><p><br></p><p><strong>Received</strong></p><p><br></p><p><strong>1st </strong>________________ Rs.10,000</p><p><strong>2nd </strong>_ ______________ Rs,6,000</p><p>----------------------------------------------</p><p><strong>Total </strong>______________ Rs.16,000</p><p><br></p><p><strong>Invested</strong></p><p><br></p><p><strong>Domain Name</strong>:₹ 763.93</p><p><strong>Server</strong>: ₹ 6,038.40</p><p><strong>Total: Rs. 6802.33</strong></p><p><br></p><p><strong>Remaining: Rs. 5802.33</strong></p>",
                "startDate": "2024-10-10T00:00:00.000Z",
                "endDate": null,
                "dueDate": null,
                "status": "In Progress",
                "createdBy": "67016a5e34b40ece3c3b3cfc",
                "createdAt": "2024-10-09T17:27:00.246Z",
                "tags": [],
                "history": [],
                "member": [
                    {
                        "userId": "67016a5e34b40ece3c3b3cfc",
                        "role": "admin"
                    }
                ],
                "updatedAt": "2024-10-13T05:30:24.503Z",
                "__v": 0
            },
            {
                "_id": "6703602b93791534a6a53297",
                "projectName": "PCRM ",
                "description": "<p><strong>FTP Details:</strong></p><p><br></p><p><strong>Username</strong>: pcrm-backend</p><p><strong>Password</strong>: te%827uP2</p>",
                "startDate": "2024-10-01T00:00:00.000Z",
                "endDate": null,
                "dueDate": null,
                "status": "In Progress",
                "createdBy": "67016a5e34b40ece3c3b3cfc",
                "createdAt": "2024-10-07T04:14:35.041Z",
                "tags": [],
                "history": [],
                "member": [
                    {
                        "userId": "67016a5e34b40ece3c3b3cfc",
                        "role": "admin"
                    }
                ],
                "updatedAt": "2024-10-19T16:54:45.979Z",
                "__v": 0
            }
        ]
    })

    const contextValue = {
        appData,
        setAppData
    }

    useEffect(() => {
        loadExistingData()
    }, [])

    const loadExistingData = async () => {
        try {
            if (await getCookie('ud')) {
                console.log(await getCookie('udd'))
                let userData = await getCookie('udd')
                setAppData(prev => {
                    return {
                        ...prev,
                        isLoggedIn: true,
                        user: JSON.parse(userData)
                    }
                })
            }
            else {
                setAppData(prev => {
                    return {
                        ...prev,
                        isLoggedIn: false,
                        user: {}
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
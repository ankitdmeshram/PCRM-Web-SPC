import React, { createContext, useEffect, useState } from 'react'
import { getCookie } from '../Utils/common'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({
        isLoggedIn: false,
        user: {},
        sidebarOpen: false,
        projects: []
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
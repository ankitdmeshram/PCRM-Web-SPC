import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'

const MyAccount = () => {

  const { setAppData } = useContext(AppContext)

  useEffect(() => {
    setAppData(prev => {
      return {
        ...prev,
        sidebarOpen: false
      }
    })
  }, [])

  return (
    <div>MyAccount</div>
  )
}

export default MyAccount
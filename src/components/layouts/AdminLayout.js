import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = (props) => {

  useEffect(() => {
    console.log('Admin Mounted')
  })

  return (
    <>
      <header>Admin Header</header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout
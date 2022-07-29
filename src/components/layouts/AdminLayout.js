import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = (props) => {
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
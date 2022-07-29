import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = (props) => {
  return (
    <>
      <DefaultHeader />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
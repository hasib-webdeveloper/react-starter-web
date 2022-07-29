import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DefaultHeader from './DefaultHeader'
import { useDispatch } from 'react-redux'
import { initUser } from '../../store/reducers/userReducers'

const DefaultLayout = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUser())
  })

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
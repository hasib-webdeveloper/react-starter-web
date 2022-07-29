import React from 'react'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = (props) => {
  return (
    <>
      <DefaultHeader />

      {props.children}
    </>
  )
}

export default DefaultLayout
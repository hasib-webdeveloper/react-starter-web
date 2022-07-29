import React from 'react'
import { api } from '../../plugins/axios'

const submitForm = async () => {
  try {
    const res = await api.post('user/login', {})
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const Login = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className='card'>
            <div className='card-header'>
              Login
            </div>

            <div className='card-body'>
              Input
              Input
            </div>

            <div className="card-footer d-flex justify-content-end">
              <button className="btn btn-dark me-3">Cancle</button>
              <button onClick={submitForm} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
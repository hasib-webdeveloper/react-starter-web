import React, { useState } from 'react'
import InputField from '../../components/forms/InputField'
import { api } from '../../plugins/axios'


const Login = () => {
  // const [email, setEmail] = useState('hasib6@test.com')
  // const [password, setPassword] = useState('123456')

  const [form, setForm] = useState({
    email: "hasib6@test.com",
    password: "123456"
  })

  const submitForm = async () => {
    try {
      const res = await api.post('user/login', form)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className='card'>
            <div className='card-header'>
              Login
            </div>

            <div className='card-body'>
              <InputField value={form} setValue={setForm} fieldName="email" placeholder="Phone or Email" />
              <InputField value={form} setValue={setForm} fieldName="password" type="password" className="mt-2" placeholder="Your Password" />
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
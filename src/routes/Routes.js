import HomePage from '../pages/Home/Index'
import Profile from '../pages/Profile/Index'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

import DefaultLayout from '../components/layouts/DefaultLayout'
import AdminLayout from '../components/layouts/AdminLayout'

import {
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from '../pages/Admin/Dashboard'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default index
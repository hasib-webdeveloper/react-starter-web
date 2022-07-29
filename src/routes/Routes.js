import HomePage from '../pages/Home/Index'
import ProfilePage from '../pages/Profile/Index'
import LoginPage from '../pages/Auth/Login'
import AboutPage from '../pages/About'
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
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default index
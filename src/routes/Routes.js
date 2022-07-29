import HomePage from '../pages/Home/Index'
import ProfilePage from '../pages/Profile/Index'
import LoginPage from '../pages/Auth/Login'
import AboutPage from '../pages/About'

import {
  Routes,
  Route,
} from "react-router-dom"

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}

export default index
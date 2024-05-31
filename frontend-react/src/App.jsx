import { Route, Routes } from "react-router-dom"
import UserLayout from "./Layout/UserLayout"
import Home from "./pages/user/Home/Home"
import AdminLayout from "./Layout/AdminLayout"
import Dashboard from "./pages/admin/Dashboard/Dashboard"
import Login from "./pages/admin/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import TentangKami from "./pages/admin/TentangKami/TentangKami"
import Logout from "./pages/admin/Logout/Logout"
import Transaksi from "./pages/admin/Transaksi/Transaksi"
import ManageOrganization from "./pages/admin/ManageOrganization/ManageOrganization"
import ManageUser from "./pages/admin/ManageUser/ManageUser"
import Donasi from "./pages/admin/ManageContent/Donasi/Donasi"
import Relawan from "./pages/admin/ManageContent/Relawan/Relawan"
import Artikel from "./pages/admin/ManageContent/Artikel/Artikel"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-content/donasi" element={<Donasi />} />
          <Route path="manage-content/relawan" element={<Relawan />} />
          <Route path="manage-content/artikel" element={<Artikel />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="manage-organization" element={<ManageOrganization />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="tentang-kami" element={<TentangKami />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="admin/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
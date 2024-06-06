import { Route, Routes } from "react-router-dom"
import UserLayout from "./Layout/UserLayout"
import Home from "./pages/user/Home/Home"
import AdminLayout from "./Layout/AdminLayout"
import Dashboard from "./pages/admin/Dashboard/Dashboard"
import Login from "./pages/admin/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Transaksi from "./pages/admin/Transaksi/Transaksi"
import ManageOrganization from "./pages/admin/ManageOrganization/ManageOrganization"
import ManageUser from "./pages/admin/ManageUser/ManageUser"
import DetailUser from "./components/admin/ManageUserComponents/DetailUser/DetailUser"
import Donasi from "./pages/admin/ManageContent/Donasi/Donasi"
import DetailDonasi from "./components/admin/ManageContentDonasi/DetailDonasi/DetailDonasi"
import Volunteer from "./pages/admin/ManageContent/Volunteer/Volunteer"
import DetailVolunteer from "./components/admin/ManageContentVolunteer/DetailVolunteer"
import Artikel from "./pages/admin/ManageContent/Artikel/Artikel"
import DetailArtikel from "./components/admin/ManageContentArtikel/DetailArtikel"
import Chatbot from "./pages/admin/Chatbot/Chatbot"
import Notification from "./pages/admin/Notification/Notification"

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
          <Route path="manage-content/donasi/detail-donasi/:id" element={<DetailDonasi/>} />
          <Route path="manage-content/volunteer" element={<Volunteer />} />
          <Route path="manage-content/volunteer/detail-volunteer" element={<DetailVolunteer/>} />
          <Route path="manage-content/artikel" element={<Artikel />} />
          <Route path="manage-content/artikel/detail-artikel" element={<DetailArtikel/>} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="manage-user/detail-user/:id" element={<DetailUser />} />
          <Route path="manage-organization" element={<ManageOrganization />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="notification" element={<Notification />} />
        </Route>
        <Route path="admin/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
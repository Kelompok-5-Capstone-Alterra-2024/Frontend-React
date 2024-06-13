import UserLayout from "./Layout/UserLayout"
import Home from "./pages/user/Home/Home"
import AdminLayout from "./Layout/AdminLayout"
import Dashboard from "./pages/admin/Dashboard/Dashboard"
import Login from "./pages/admin/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Transaksi from "./pages/admin/Transaksi/Transaksi"
import DetailTransaksi from "./components/admin/RiwayatTransaksi/DetailTransaksi"
import ManageOrganization from "./pages/admin/ManageOrganization/ManageOrganization"
import DetailOrganization from "./components/admin/ManageOrganizationComponents/DetailOrganization/DetailOrganization"
import ManageUser from "./pages/admin/ManageUser/ManageUser"
import DetailUser from "./components/admin/ManageUserComponents/DetailUser/DetailUser"
import Donasi from "./pages/admin/ManageContent/Donasi/Donasi"
import DetailDonasi from "./components/admin/ManageContentDonasi/DetailDonasi/DetailDonasi"
import Volunteer from "./pages/admin/ManageContent/Volunteer/Volunteer"
import DetailVolunteer from "./components/admin/ManageContentVolunteer/DetailVolunteer/DetailVolunteer"
import Artikel from "./pages/admin/ManageContent/Artikel/Artikel"
import DetailArtikel from "./components/admin/ManageContentArtikel/DetailArtikel/DetailArtikel"
import Chatbot from "./pages/admin/Chatbot/Chatbot"
import Notification from "./pages/admin/Notification/Notification"
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && location.pathname === '/admin/login') {
      navigate('/admin');
    } else if (!isLoggedIn && location.pathname.startsWith('/admin') && location.pathname !== '/admin/login') {
      navigate('/admin/login');
    }
  }, [isLoggedIn, location, navigate]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-content/donasi" element={<Donasi />} />
          <Route path="manage-content/donasi/detail-donasi/:id" element={<DetailDonasi/>} />
          <Route path="manage-content/volunteer" element={<Volunteer />} />
          <Route path="manage-content/volunteer/detail-volunteer/:id" element={<DetailVolunteer/>} />
          <Route path="manage-content/artikel" element={<Artikel />} />
          <Route path="manage-content/artikel/detail-artikel/:id" element={<DetailArtikel/>} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="manage-user/detail-user/:id" element={<DetailUser />} />
          <Route path="manage-organization" element={<ManageOrganization />} />
          <Route path="manage-organization/detail-organization/:id" element={<DetailOrganization/>} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="transaksi/detail-transaksi" element={<DetailTransaksi />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="notification" element={<Notification />} />
        </Route>
        <Route path="admin/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App;
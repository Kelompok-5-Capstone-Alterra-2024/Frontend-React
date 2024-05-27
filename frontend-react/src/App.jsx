import { Route, Routes } from "react-router-dom"
import UserLayout from "./Layout/UserLayout"
import Home from "./pages/user/Home/Home"
import AdminLayout from "./Layout/AdminLayout"
import Dashboard from "./pages/admin/Dashboard/Dashboard"
import Login from "./pages/admin/Login/Login"
import NotFound from "./pages/NotFound/NotFound"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home/>} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="admin/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
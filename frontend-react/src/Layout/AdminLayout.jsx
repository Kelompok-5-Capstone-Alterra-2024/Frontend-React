import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar/Sidebar';
import Navbar from '../components/admin/Navbar/Navbar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

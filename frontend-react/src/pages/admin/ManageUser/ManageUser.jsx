import { useEffect, useState } from "react";
import PaginationDataUser from "../../../components/admin/ManageUserComponents/PaginationDataUser";
import TabelDataUser from "../../../components/admin/ManageUserComponents/TabelDataUser";

const ManageUser = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  const fetchUserData = async (page) => {
    const accessToken = sessionStorage.getItem('access_token');
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/users?page=${page}&limit=10`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setTotalPages(result.totalPages);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen p-4">
    <div className="p-6 shadow-lg rounded-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">Manage User</h1>
          <p className="text-gray-500 pt-2">Berikut list user PeduliPintar</p>
        </div>
        <div className="mt-4">
          <label className="input input-bordered flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              className="grow border-0 focus:outline-none focus:ring-0 lg:w-96"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <TabelDataUser data={data}/>
      <PaginationDataUser currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages}/>
    </div>
    </div>
  );
};
  
export default ManageUser;
  


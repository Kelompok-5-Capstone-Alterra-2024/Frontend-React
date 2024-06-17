import { useEffect, useState } from "react";
import PaginationDetailOrganizationDonasi from "./PaginationDetailOrganizationDonasi";

const DetailOrganizationDonasi = ({id}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const accessToken = sessionStorage.getItem('access_token');

  useEffect(() => {
    getOrganizationDonation();
  }, [currentPage]);

  const getOrganizationDonation = async (page) => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/organizations/${id}/fundraising?page=${page}&limit=5`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.status) {
        setData(result.data);
      } else {
        console.error('Failed to fetch donations:', result.message);
      }
    } catch (error) {
      console.error('Failed to fetch donations:', error);
    }
  };

  // Define a function to get the background color based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-200';
      case 'inactive':
        return 'bg-emerald-100';
      case 'unachieved':
        return 'bg-neutral-200';
      default:
        return 'bg-neutral-100';
    }
  };

  // Define a function to get the status text based on the status
  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'aktif';
      case 'inactive':
        return 'selesai';
      case 'unachieved':
        return 'tidak tercapai';
      default:
        return 'tidak diketahui';
    }
  };
  
  if (!data || data.length === 0) {
    return (
      <div className="pt-5 rounded-lg">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-primary-main">
            <tr>
            <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Judul
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">target</th>
              <th scope="col" className="px-6 py-3">terkumpul</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    );
  }

  return (
    <div className="pt-5 rounded-lg">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-primary-main">
            <tr>
            <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Judul
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">target</th>
              <th scope="col" className="px-6 py-3">terkumpul</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.target_amount}</td>
                <td className="px-6 py-4">{item.current_progress}</td>
                <td className="px-6 py-4">
                  <div className={`px-2 py-1 rounded justify-center items-center gap-2.5 inline-flex ${getStatusColor(item.status)}`}>
                    <div className="text-neutral-700 text-xs font-normal">{getStatusText(item.status)}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationDetailOrganizationDonasi currentPage={currentPage} onPageChange={setCurrentPage}/>
    </div>
  );
};
  
export default DetailOrganizationDonasi;

import { useEffect, useState } from "react";
import PaginationCustomDataVolunteer from "./PaginationCustomDataVolunteer"
import BuktiFollow from "./BuktiFollow";

function RiwayatDataVolunteer({id}) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const accessToken = sessionStorage.getItem('access_token');
  const [currentItem, setCurrentItem] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getAllApplyByVolunteerId();
  }, [currentPage]);

  const getAllApplyByVolunteerId = async (page) => {
    try {
      if (!accessToken) {
        throw new Error('Access token is missing');
      }

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/volunteers/${id}/applications?page=${page}&limit=5`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const result = await response.json();
      console.log("Fetch result:", result);

      if (result.status === "success") {
        setData(result.data);
        console.log("Comments fetched successfully:", result.data);
      } else {
        console.error('Failed to fetch comments:', result.message);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error.message);
    }
  };

  // Define a function to get the background color based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-200';
      case 'inactive':
        return 'bg-emerald-100';
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
      default:
        return 'unknown';
    }
  };

  const handleImageClick = (item, type) => {
    setCurrentItem(item);
    setShowImageModal(true);
    if (type === "ig") {
      setImageUrl(item.ig_image_url);
    } else if (type === "yt") {
      setImageUrl(item.yt_image_url);
    }
  };

  return (
    <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">Volunteer</h1>
          <p className="text-gray-500 pt-2">Custom data detail volunteer</p>
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
       <div className="overflow-x-auto shadow-md mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white uppercase bg-primary-main">
              <tr>
                <th scope="col" className="px-6 py-3">no</th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    nama
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    rentang umur
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">pekerjaan</th>
                <th scope="col" className="px-6 py-3">bukti follow ig</th>
                <th scope="col" className="px-6 py-3">bukti follow yt</th>
                <th scope="col" className="px-6 py-3">alasan mengikuti</th>
                <th scope="col" className="px-6 py-3">status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.user_fullname}</td>
                  <td className="px-6 py-4">{item.age}</td>
                  <td className="px-6 py-4">{item.job}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleImageClick(item, "ig")}>
                      <span className="text-blue-500 underline">followig.jpg</span>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleImageClick(item, "yt")}>
                      <span className="text-blue-500 underline">followYt.jpg</span>
                    </button>
                  </td>
                  <td className="px-6 py-4">{item.reason}</td>
                  <td className="px-6 py-4">
                    <div className={`px-2 py-1 rounded justify-center items-center gap-2.5 inline-flex ${getStatusColor(item.status)}`}>
                      <div className="text-neutral-700 text-xs font-normal">{getStatusText(item.status)}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showImageModal && currentItem && (
          <BuktiFollow
            src={imageUrl}
            onClose={() => setShowImageModal(false)}
          />
          )}
        </div>
      <PaginationCustomDataVolunteer currentPage={currentPage} onPageChange={setCurrentPage}/>
    </div>
  )
}

export default RiwayatDataVolunteer
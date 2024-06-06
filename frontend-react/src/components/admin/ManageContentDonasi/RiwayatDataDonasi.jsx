import { useEffect, useState } from "react";
import PaginationDataDonasi from "./PaginationDataDonasi"

function RiwayatDataDonasi({id}) {

  const [data, setData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/fundraisings/${id}/donations`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.success) {
          setData(result.data);
        } else {
          console.error('Failed to fetch donations:', result.message);
        }
      } catch (error) {
        console.error('Failed to fetch donations:', error);
      }
    };

    fetchDonations();
  }, []);

  if (!data || data.length === 0) {
    return (
      <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">Donasi</h1>
            <p className="text-gray-500 pt-2">Tidak ada data riwayat data donasi</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">Donasi</h1>
          <p className="text-gray-500 pt-2">Riwayat data donasi</p>
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
                <th scope="col" className="px-6 py-3">donasi</th>
                <th scope="col" className="px-6 py-3">pembayaran</th>
                <th scope="col" className="px-6 py-3">tanggal</th>
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
                  <td className="px-6 py-4">{item.user_name}</td>
                  <td className="px-6 py-4">{item.current_amount}</td>
                  <td className="px-6 py-4">{item.payment_method}</td>
                  <td className="px-6 py-4">{item.donated_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <PaginationDataDonasi/>
    </div>
  )
}

export default RiwayatDataDonasi

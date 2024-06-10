import { useEffect, useState } from 'react';
import AddDonasi from "../../../../components/admin/ManageContentDonasi/TambahContentDonasi";
import TabelDataDonasi from "../../../../components/admin/ManageContentDonasi/TabelDataDonasi";
import PaginationDataDonasi from "../../../../components/admin/ManageContentDonasi/PaginationDataDonasi";
import up from '../../../../assets/images/arrowUpBlue.svg';

function Donasi() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAllFundraising(currentPage);
  }, [currentPage]);

  const accessToken = sessionStorage.getItem('access_token');
  const getAllFundraising = async (page) => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/fundraisings?page=${page}&limit=10`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="w-full flex gap-4 items-center mb-6">
        <div className="text-black text-2xl font-bold">Manage Content Donasi</div>
          <button className="px-4 py-2 bg-sky-500 text-gray-50 text-sm font-semibold rounded-lg" onClick={openModal}>Tambah Content Donasi</button>
          <AddDonasi isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Jumlah Content Donasi Aktif',
            value: '130 Content',
            grade: '12',
          },
          {
            label: 'Total Donasi',
            value: 'Rp 3.900.000,00',
            grade: '12',
          },
          {
            label: 'Content Tidak Aktif',
            value: '5',
            grade: '12',
          },
          {
            label: 'Content Donasi Selesai',
            value: '25',
            grade: '12',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
            <p className="text-zinc-500 text-xs pb-1">{item.label}</p>
            <div className="flex justify-between items-center w-full">
              <p className="text-zinc-900 text-xl font-semibold">{item.value}</p>
              <div className="flex items-center gap-0">
                <p className="text-sky-500 text-sm">+ {item.grade} %</p>
                <img className="w-2 ml-1" src={up} alt="Arrow Up" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">Donasi</h1>
            <p className="text-gray-500 pt-2">Tabel data konten donasi</p>
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
        <TabelDataDonasi data={data}/>
        <PaginationDataDonasi currentPage={currentPage} onPageChange={setCurrentPage}/>
      </div>
    </div>
  )
}

export default Donasi
import { useState } from 'react';
import AddDonasi from "../../../../components/admin/ManageContentDonasi/TambahContentDonasi";
import TabelDataDonasi from "./TabelDataDonasi";
import PaginationDataDonasi from "./PaginationDataDonasi";
import up from '../../../../assets/images/arrowUpBlue.svg';
import search from '../../../../assets/images/search.png';

function Donasi() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="w-full flex space-x-4 items-center mb-6">
        <div className="text-black text-2xl font-semibold font-['Roboto']">Manage Content Donasi</div>
          <button className="px-4 py-2 bg-sky-500 text-gray-50 text-sm font-semibold rounded-lg" onClick={openModal}>Tambah Content Donasi</button>
          <AddDonasi isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
            <p className="text-zinc-500 text-xs pb-1">Jumlah Content Donasi Aktif</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-zinc-900 text-xl font-semibold">130 Content</p>
                  <div className="flex items-center gap-0">
                    <p className="text-sky-500 text-sm">+ 12%</p>
                    <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                <p className="text-zinc-500 text-xs pb-1">Total Donasi</p>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-zinc-900 text-xl font-semibold">Rp.3.900.000,00</p>
                      <div className="flex items-center gap-0">
                        <p className="text-sky-500 text-sm">+ 12%</p>
                        <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                      </div>
                    </div>
                  </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                  <p className="text-zinc-500 text-xs">Content Tidak Aktif</p>
                    <div className="flex justify-between items-center w-full">
                    <p className="text-zinc-900 text-xl font-semibold">5</p>
                    <div className="flex items-center gap-0">
                      <p className="text-sky-500 text-sm">+ 12%</p>
                      <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                  <p className="text-zinc-500 text-xs">Content Donasi Selesai</p>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-zinc-900 text-xl font-semibold">25</p>
                      <div className="flex items-center gap-0">
                        <p className="text-sky-500 text-sm">+ 9%</p>
                        <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="grid pt-5">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="w-full h-auto md:h-[102px] px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-col justify-start items-start gap-2">
                    <div className="text-black text-2xl md:text-[32px] font-bold leading-10 pb-2">Donasi</div>
                    <div className="text-zinc-900/opacity-40 text-base font-normal">Tabel data konten donasi</div>
                  </div>
                  <div className="w-full md:w-96 flex-col justify-start items-start gap-2 mt-4 md:mt-0">
                    <div className="w-full bg-gray-50 rounded-lg border border-gray-300 flex justify-start items-center gap-2.5">
                      <div className="w-4 h-4 relative" />
                      <img src={search} alt="search" />
                      <input
                        type="text"
                        className="w-full bg-transparent border-none text-gray-500 text-sm font-normal leading-[17.50px] focus:outline-none"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <TabelDataDonasi/>
                <PaginationDataDonasi/> 
              </div>
            </div> */}
          <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">Riwayat Transaksi</h1>
            <p className="text-gray-500 pt-2">Riwayat data transaksi</p>
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
        <TabelDataDonasi/>
        <PaginationDataDonasi/>
      </div>
          </div>
  )
}

export default Donasi
import { useState } from "react";
import edit from "../../../../assets/images/edit.svg";
import unduhDetail from "../../../../assets/images/unduh-detail.png";
import DetailUserDonasi from "./Donasi/DetailUserDonasi";
import DetailUserVolunteer from "./Volunteer/DetailUserVolunteer";
import HapusUser from "../DetailUser/HapusUser";

function DetailUser() {
  const [selectedTab, setSelectedTab] = useState('detail-user-donasi'); 
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-neutral-50 min-h-screen p-4">
      <div className="shadow-xl rounded-xl p-5">
        {/* Conditionally render profile section */}
        {!isEditing && (
          <div className="rounded-lg border border-gray-400 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center p-6 border-r border-gray-400">
                <img
                  className="w-60 object-cover rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
                <div className="pt-3">
                  <span className="text-black text-xl font-bold leading-7">Agung Rizky </span>
                  <span className="text-sky-500 text-base font-bold leading-normal">| ID: 01</span>
                </div>
              </div>
              <div className="grid grid-rows-2 col-span-2">
                <div className="flex flex-col justify-center ps-14 border-b border-gray-400">
                  <div className="grid grid-cols-3">
                    <div>
                      <p className="text-gray-700">Username</p>
                      <p className="text-gray-500">agung123</p>
                    </div>
                    <div>
                      <p className="text-gray-700">Email</p>
                      <p className="text-gray-500">agung123@gmail.com</p>
                    </div>
                    <div>
                      <button onClick={handleEditClick} className="relative flex text-sky-500 text-lg">
                        Edit
                        <img src={edit} alt="edit" className="ms-2 h-5 w-5 object-contain" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center ps-14">
                  <div className="grid grid-cols-3">
                    <div>
                      <p className="text-gray-700">Nomor Telepon</p>
                      <p className="text-gray-500">081290575320</p>
                    </div>
                    <div>
                      <p className="text-gray-700">Tanggal Register</p>
                      <p className="text-gray-500">10 Juli 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isEditing && (
          <div className="grid grid-cols-1 flex-col lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-white shadow flex flex-col items-center justify-center p-6">
              <img
                className="w-60 object-cover rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div className="pt-3">
                <span className="text-black text-xl font-semibold font-['Roboto'] leading-7">Agung Rizky </span>
                <span className="text-sky-500 text-base font-semibold font-['Roboto'] leading-normal">| ID: 01</span>
              </div>
              <button className="text-white font-semibold mt-4 py-2 px-8 bg-red-500 rounded-lg border border-gray-100 justify-center items-center" onClick={openModal}>
                Hapus User
              </button>
              <HapusUser isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="bg-white p-4 col-span-2 rounded-lg shadow max-h-screen">
              <form>
              <h1 className="mb-3 text-black font-bold leading-normal">Edit Detail User</h1>
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="nama" className="block text-gray-700 text-sm font-normal">Nama Lengkap</label>
                      <input type="text" id="nama" placeholder="Ketik nama lengkap baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="no" className="block text-gray-700 text-sm font-normal">Nama Telefon</label>
                      <input type="text" id="no" placeholder="Ketik no telefon baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="username" className="block text-gray-700 text-sm font-normal">Username</label>
                      <input type="text" id="username" placeholder="Ketik username baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="id" className="block text-gray-700 text-sm font-normal">ID</label>
                      <input type="text" id="id" placeholder="Ketik id baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-normal">Email</label>
                      <input type="text" id="email" placeholder="Ketik email baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="password" className="block text-gray-700 text-sm font-normal">Password</label>
                      <input type="text" id="password" placeholder="Ketik password baru.." className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button 
                    type="button" 
                    onClick={handleCancelClick} 
                    className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3"
                  >
                    Batal
                  </button>
                  <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Tabs */}
        <div className="flex flex-wrap justify-between mt-4">
          {/* Bagian kiri */}
          <div className="left">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul className="flex">
                <li>
                  <button
                    className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                      selectedTab === 'detail-user-donasi' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTab('detail-user-donasi')}
                  >
                    Donasi
                  </button>
                </li>
                <li>
                  <button
                    className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                      selectedTab === 'detail-user-volunteer' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTab('detail-user-volunteer')}
                  >
                    Volunteer
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Bagian kanan */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4 md:mt-0">
            <label className="input input-bordered flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                className="grow border-0 focus:outline-none focus:ring-0 w-40 md:w-60"
                placeholder="Search"
              />
            </label>
            <button>
              <img className="object-contain w-36" src={unduhDetail} alt="Unduh Detail" />
            </button>
          </div>
        </div>
        {/* Table */}
        <div>
          {selectedTab === 'detail-user-donasi' ? <DetailUserDonasi /> : <DetailUserVolunteer />}
        </div>
      </div>
    </div>
  );
}

export default DetailUser;

import { useEffect, useState } from "react";
import edit from "../../../../assets/images/edit.svg";
import unduhDetail from "../../../../assets/images/unduh-detail.png";
import DetailUserDonasi from "./Donasi/DetailUserDonasi";
import DetailUserVolunteer from "./Volunteer/DetailUserVolunteer";
import HapusUser from "../DetailUser/HapusUser";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function DetailUser() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [editUsername, setEditUsername] = useState('');
  const [editFullName, setEditFullName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editRegisterDate, setEditRegisterDate] = useState('');
  const [editPassword, setEditPassword] = useState('');

  const [selectedTab, setSelectedTab] = useState('detail-user-donasi'); 
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    getDetailUser();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailUser = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/users/${id}`, {
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

  const updateUser = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', editUsername);
      formData.append('fullName', editFullName); 
      formData.append('email', editEmail);
      formData.append('phone', editPhone);
      formData.append('registerDate', editRegisterDate);
      formData.append('password', editPassword);

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/users/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        getDetailUser(); // Refresh the data after successful update
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'data berhasil diedit',
        });
        setIsEditing(false); // Exit edit mode after update
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleEditClick = () => {
    setEditUsername(data.username);
    setEditFullName(data.full_name);
    setEditEmail(data.email);
    setEditPhone(data.phone);
    setEditRegisterDate(data.register_date);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  if (!data) {
    return <div className='min-h-screen bg-neutral-50 flex justify-center items-center'>Loading...</div>;
  }

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
                  src={data.avatar}
                  alt="Profile"
                />
                <div className="pt-3">
                  <span className="text-black text-xl font-bold leading-7">{data.full_name} </span>
                  <span className="text-sky-500 text-base font-bold leading-normal">| ID: {data.id}</span>
                </div>
              </div>
              <div className="grid grid-rows-2 col-span-2">
                <div className="flex flex-col justify-center ps-14 border-b border-gray-400">
                  <div className="grid grid-cols-3">
                    <div>
                      <p className="text-gray-700">Username</p>
                      <p className="text-gray-500">{data.username}</p>
                    </div>
                    <div>
                      <p className="text-gray-700">Email</p>
                      <p className="text-gray-500">{data.email}</p>
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
                      <p className="text-gray-500">{data.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-700">Tanggal Register</p>
                      <p className="text-gray-500">{data.register_date}</p>
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
              <label className="cursor-pointer">
                <img
                  id='file_name'
                  className="w-60 object-cover rounded-full"
                  src={data.avatar}
                  alt="Profile"
                />
              </label>
              <div className="pt-3">
                <span className="text-black text-xl font-semibold font-['Roboto'] leading-7">{editFullName} </span>
                <span className="text-sky-500 text-base font-semibold font-['Roboto'] leading-normal">| ID: {id}</span>
              </div>
              <button className="text-white font-semibold mt-4 py-2 px-8 bg-red-500 rounded-lg border border-gray-100 justify-center items-center" onClick={openDeleteModal}>
                Hapus User
              </button>
              <HapusUser isOpen={isDeleteModalOpen} onClose={closeDeleteModal} itemId={id}/>
            </div>
            <div className="bg-white p-4 col-span-2 rounded-lg shadow max-h-screen">
              <form onSubmit={updateUser}>
              <h1 className="mb-3 text-black font-bold leading-normal">Edit Detail User</h1>
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="nama" className="block text-gray-700 text-sm font-normal">Nama Lengkap</label>
                      <input
                        type="text"
                        id="nama"
                        value={editFullName}
                        onChange={e => setEditFullName(e.target.value)}
                        placeholder="Ketik nama lengkap baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="no" className="block text-gray-700 text-sm font-normal">Nama Telefon</label>
                      <input
                        type="text"
                        id="no"
                        value={editPhone}
                        onChange={e => setEditPhone(e.target.value)}
                        placeholder="Ketik no telefon baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="username" className="block text-gray-700 text-sm font-normal">Username</label>
                      <input
                        type="text"
                        id="username"
                        value={editUsername}
                        onChange={e => setEditUsername(e.target.value)}
                        placeholder="Ketik username baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="id" className="block text-gray-700 text-sm font-normal">ID</label>
                      <input
                        type="text"
                        id="id"
                        value={id}
                        disabled
                        placeholder="Ketik id baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-normal">Email</label>
                      <input
                        type="text"
                        id="email"
                        value={editEmail}
                        onChange={e => setEditEmail(e.target.value)}
                        placeholder="Ketik email baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="password" className="block text-gray-700 text-sm font-normal">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={editPassword}
                        onChange={e => setEditPassword(e.target.value)}
                        placeholder="Ketik password baru.."
                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
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
          {selectedTab === 'detail-user-donasi' ? <DetailUserDonasi id={id}/> : <DetailUserVolunteer id={id}/>}
        </div>
      </div>
    </div>
  );
}

export default DetailUser;

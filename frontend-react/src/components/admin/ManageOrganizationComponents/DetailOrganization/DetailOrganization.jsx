import { useEffect, useState } from "react"
import DetailOrganizationDonasi from "./Donasi/DetailOrganizationDonasi";
import DetailOrganizationVolunteer from "./Volunteer/DetailOrganizationVolunteer";
import HapusOrganisasi from "../HapusOrganisasi"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function DetailOrganization() {
  const [selectedTab, setSelectedTab] = useState('detail-organization-donasi');
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [description, setDescription] = useState('');
  const [noRekening, setNoRekening] = useState('');
  const [website, setWebsite] = useState('');
  const [instagram, setInstagram] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    getDetailOrganization();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailOrganization = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/organizations/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setName(result.data.name);
        setJoinDate(result.data.join_date);
        setDescription(result.data.description);
        setWebsite(result.data.website);
        setInstagram(result.data.instagram);
        setNoRekening(result.data.no_rek);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateOrganization = async () => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('avatar', imageFile);
      }
      formData.append('name', name);
      formData.append('no_rek', noRekening);
      formData.append('join_date', joinDate);
      formData.append('website', website);
      formData.append('instagram', instagram); 
      formData.append('description', description);

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/organizations/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        getDetailOrganization(); // Refresh the data after successful update
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'data berhasil diedit',
        });
      } else {
        console.error('Failed to update organization:', result.message);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      document.getElementById('file_name').textContent = file.name;
    }
  };

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  }; 

  if (!data) {
    return <div className='min-h-screen bg-neutral-50 flex justify-center items-center'>Loading...</div>;
  }

    return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail organisasi</div>
      <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
          <div className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
            <div className="flex justify-center items-center">
              <img className="w-64- h-64 rounded-full oject-cover" src={data.avatar} alt="Image" />
            </div>
            <h1 className="p-2 text-black text-2xl font-bold">{data.name}</h1>
            <p className="ps-2 text-zinc-700 text-sm font-normal">Terdaftar sejak {data.join_date}</p>
            <div className="p-2 items-center gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1">
            </div>
            </div>
              <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
                <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
                <div className="text-justify">
                  <span className="text-black text-md font-normal">{data.description}</span>
                </div>
              </div>
            </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow max-h-screen overflow-y-auto">
        <form>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-center">
                <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                  Pilih File
                </label>
                <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1" id="file_name">Tidak ada file yang dipilih</span>
                <input
                  className="hidden"
                  id="multiple_files"
                  type="file"
                  onChange={handleFileChange}
                  multiple
              />
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-normal">Nama Organisasi</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type here" 
                    className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="no_rek" className="block text-gray-700 text-sm font-normal">No Rekening</label>
                  <input 
                    type="text" 
                    id="no_rek" 
                    value={noRekening}
                    onChange={(e) => setNoRekening(e.target.value)}
                    placeholder="Type here" 
                    className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="tanggalBergabung" className="block text-gray-700 text-sm font-normal mb-1">Tanggal bergabung</label>
                  <input
                    type="date"
                    id="join_date"
                    name="join_date"
                    value={joinDate}
                    onChange={(e) => setJoinDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                <div className="flex flex-col mt-3">
                  <label htmlFor="website" className="block text-gray-700 text-sm font-normal">Website</label>
                  <input 
                    type="text" 
                    id="website" 
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
                <div className="flex flex-col">
                  <label htmlFor="ig" className="block text-gray-700 text-sm font-normal">Instagram</label>
                  <input 
                    type="text" 
                    id="ig" 
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                  <textarea
                    id="message"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type here"
                  />
                </div>
                </div>
                </div>
                <div className="flex justify-end ">
                  <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3" onClick={openModal}>
                    Hapus
                  </button>
                  <HapusOrganisasi isOpen={isModalOpen} onClose={closeModal} />
                  <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold" type="button" onClick={updateOrganization}>
                    Edit Organisasi
                  </button>
              </div>
          </form>
        </div>
      </div>
      <div className="p-6 shadow-lg bg-white mt-4 rounded-lg">
      <div className="flex flex-wrap justify-between mt-4">
      {/* Bagian kiri */}
        <div className="left">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex">
              <li>
                <button
                  className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                    selectedTab === 'detail-organization-donasi' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTab('detail-organization-donasi')}
                >
                  Donasi
                </button>
                </li>
                <li>
                  <button
                    className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                      selectedTab === 'detail-organization-volunteer' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTab('detail-organization-volunteer')}
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
                className="grow border-0 focus:outline-none focus:ring-0 lg:w-96"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div>
          {selectedTab === 'detail-organization-donasi' ? <DetailOrganizationDonasi /> : <DetailOrganizationVolunteer />}
        </div>
      </div>
    </div>
    );
  }
  
  export default DetailOrganization
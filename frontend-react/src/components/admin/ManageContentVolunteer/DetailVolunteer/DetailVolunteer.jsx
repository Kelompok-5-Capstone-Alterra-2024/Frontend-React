import { useEffect, useState } from "react"
import RiwayatDataVolunteer from './RiwayatDataVolunteer'
import HapusVolunteer from '../HapusVolunteer'
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function DetailVolunteer() {
  const { id } = useParams();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [targetVolunteer, setTargetVolunteer] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    getDetailVolunteer();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailVolunteer = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/volunteer/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setTitle(result.data.title);
        setOrganization(result.data.organization_id);
        setTargetVolunteer(result.data.target_volunteer);
        setStartDate(result.data.start_date);
        setEndDate(result.data.end_date);
        setDescription(result.data.content_activity);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateVolunteer = async () => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('image_url', imageFile);
      }
      formData.append('title', title);
      formData.append('organization_id', organization); 
      formData.append('target_volunteer', targetVolunteer);
      formData.append('start_date', startDate);
      formData.append('end_date', endDate);
      formData.append('content_activity', description);

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/volunteers/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        getDetailVolunteer(); // Refresh the data after successful update
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'data berhasil diedit',
        });
      } else {
        console.error('Failed to update volunteer:', result.message);
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

  const openDeleteModal = (event) => {
    event.preventDefault();
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  if (!data) {
    return <div className='min-h-screen bg-neutral-50 flex justify-center items-center'>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail Volunteer</div>
        <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
          <div className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
            <img className="w-full h-auto rounded" src={data.image_url} alt="Image" />
              <h1 className="p-2 text-black text-2xl font-bold">{data.title}</h1>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="p-2 justify-start gap-2 items-start flex">
                  {data.user_registered.user_avatar_registered.map((user, index) => (
                    <img key={index} className="w-7 h-7 rounded-full" src={user.avatar} alt={`Avatar ${index}`} />
                  ))}
                  <p className="ps-3 text-zinc-700 font-['Roboto'] leading-none">{data.registered_volunteer} relawan telah bergabung</p>
                </div>
              </div>
              <div className="p-2 items-center gap-4">
                <div className="flex-col justify-start items-start gap-1">
                  <progress className="progress progress-info w-3/4" value={data.target_volunteer} max={data.target_volunteer}></progress>
                  <div className="flex justify-start items-center gap-4">
                    <p className="text-sky-500 font-bold">{data.registered_volunteer} Pendaftar</p>
                    <p className="text-stone-400 font-medium">dari target</p>
                    <p className="text-stone-900 font-bold">{data.target_volunteer} Pendaftar</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
                  <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
                  <div className="text-justify">
                    <span className="text-black font-normal">{data.content_activity}</span>
                  </div>
                </div>
              </div>  
        </div>
        <div className="bg-white p-4 rounded-lg shadow overflow-y-auto h-full flex flex-col">
        <form className="flex flex-col flex-1">
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
          <div className="mb-6 flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="judul" className="block text-gray-700 text-sm font-normal">Judul</label>
                <input
                  type="text"
                  id="judul"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type here"
                  className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="organisasi" className="block text-gray-700 text-sm font-normal">Organisasi</label>
                <input
                  type="text"
                  id="organisasi"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Type here"
                  className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="target" className="block text-gray-700 text-sm font-normal">Target Volunteer</label>
                  <input
                    type="number"
                    id="target"
                    value={targetVolunteer}
                    onChange={(e) => setTargetVolunteer(e.target.value)}
                    placeholder="Type here"
                    className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tanggalMulai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal mulai</label>
                    <input
                      type="date"
                      id="tanggalMulai"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal selesai</label>
                  <input
                    type="date"
                    id="tanggalSelesai"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
              </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="deskripsi" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                <textarea
                  id="deskripsi"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3" onClick={openDeleteModal}>
              Hapus
            </button>
            <HapusVolunteer isOpen={isDeleteModalOpen} onClose={closeDeleteModal} itemId={id} />
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold" type="button" onClick={updateVolunteer}>
              Edit Konten
            </button>
          </div>
        </form>
      </div>
      </div>
      <RiwayatDataVolunteer/>
    </div>
  )
}

export default DetailVolunteer
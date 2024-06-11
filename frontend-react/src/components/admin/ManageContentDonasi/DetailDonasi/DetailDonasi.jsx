import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RiwayatDataDonasi from './RiwayatDataDonasi';
import HapusDonasi from '../HapusDonasi';
import Cashout from './Cashout';

function DetailDonasi() {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [targetAmount, setTargetAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    getDetailFundraising();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailFundraising = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/fundraisings/${id}`, {
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
        setTargetAmount(result.data.target_amount);
        setCategory(result.data.category_id);
        setStartDate(result.data.start_date);
        setEndDate(result.data.end_date);
        setDescription(result.data.description);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateFundraising = async () => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('image_url', imageFile);
      }
      formData.append('title', title);
      formData.append('organization_id', organization); 
      formData.append('target_amount', targetAmount);
      formData.append('category_id', category);
      formData.append('start_date', startDate);
      formData.append('end_date', endDate);
      formData.append('description', description);

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/fundraisings/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        getDetailFundraising(); // Refresh the data after successful update
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    document.getElementById('file_name').textContent = e.target.files[0].name;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail Donasi</div>
      <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
          <div className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
            <img className="w-full h-auto rounded" src={data.image_url} alt="Image" />
            <h1 className="p-2 text-black text-2xl font-bold">{data.title}</h1>
            <div className="p-2 items-center gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1">
                <p className="text-zinc-700 font-normal">Donasi Terkumpul</p>
                <p className="text-black text-xs font-medium text-end">{Math.ceil((new Date(data.end_date).getTime() - Date.now()) / (1000 * 3600 * 24))} hari lagi</p>
                <div className="flex justify-start items-center gap-4">
                  <p className="text-sky-500 font-bold">Rp {data.current_progress}</p>
                  <p className="text-stone-400 font-medium">dari target</p>
                  <p className="text-stone-900 font-bold">Rp {data.target_amount}</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
              <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
              <div className="text-justify">
                <span className="text-black text-md font-normal">{data.description}</span>
                <span className="text-cyan-600 text-md font-normal">Read More</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold" onClick={openModal}>
              Salurkan Dana
            </button>
            <Cashout isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow max-h-screen overflow-y-auto h-full flex flex-col">
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
              <div className="flex flex-col">
                <label htmlFor="target" className="block text-gray-700 text-sm font-normal">Target Donasi</label>
                <input
                  type="number"
                  id="target"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  placeholder="Type here"
                  className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="kategori" className="block text-gray-700 text-sm font-normal">Kategori</label>
                <input
                  type="text"
                  id="kategori"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Type here"
                  className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="tanggalMulai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal mulai</label>
                  <input
                    type="date"
                    id="tanggalMulai"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal selesai</label>
                  <input
                    type="date"
                    id="tanggalSelesai"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="deskripsi" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                <textarea
                  id="deskripsi"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block p-2.5 w-full h-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3" type="button" onClick={openDeleteModal}>
              Hapus
            </button>
            <HapusDonasi isOpen={isDeleteModalOpen} onClose={closeDeleteModal} itemId={id} />
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold" type="button" onClick={updateFundraising}>
              Edit Konten
            </button>
          </div>
        </form>
      </div>
      </div>
      <RiwayatDataDonasi id={id} />
    </div>
  );
}

export default DetailDonasi;
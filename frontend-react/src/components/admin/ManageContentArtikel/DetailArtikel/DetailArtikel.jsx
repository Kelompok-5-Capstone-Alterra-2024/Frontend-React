import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import RiwayatDataArtikel from './RiwayatDataArtikel';
import HapusArtikel from "../HapusArtikel";
import Swal from "sweetalert2";

function DetailArtikel() {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState('Tidak ada file yang dipilih');  // Menambahkan state untuk nama file

  useEffect(() => {
    getDetailArticles();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailArticles = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/articles/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        setTitle(result.data.title);
        setContent(result.data.content);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append('image_url', imageFile);
      }
      formData.append('title', title);
      formData.append('content', content);

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        getDetailArticles();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'data berhasil diedit',
        }); // Refresh the data after successful update
      } else {
        console.error('Failed to update articles:', result.message);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setFileName(file ? file.name : 'Tidak ada file yang dipilih');  // Memperbarui state dengan nama file
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
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail Artikel</div>
      <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
          <div className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
            <img className="w-full h-auto rounded" src={data.image_url} alt="Image" />
            <h1 className="p-2 text-black text-2xl font-bold">{data.title}</h1>
            <p className="ps-2 text-zinc-700 text-sm font-normal">{data.created_at}</p>
            <div className="p-2 items-center gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-1">
                <div className="flex justify-start items-center gap-4">
                  <p className="text-sky-500 font-bold">{data.total_comment} Komentar</p>
                  <p className="text-stone-900 font-bold">{data.total_user_bookmark} User menyimpan</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
              <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
              <div className="text-justify">
                <span className="text-black text-md font-normal">{data.content}</span>
                <span className="text-cyan-600 text-md font-normal">Read More</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow max-h-screen flex flex-col">
          <form className="flex-1 flex flex-col" onSubmit={updateArticle}>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-center">
                <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                  Pilih File
                </label>
                <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1">{fileName}</span>  {/* Menggunakan state fileName */}
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
              <div className="flex flex-col mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-normal">Judul</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type here"
                  className="mt-1 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="content" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3" onClick={openModal}>
                Hapus
              </button>
              <HapusArtikel isOpen={isModalOpen} onClose={closeModal} itemId={id} />
              <button type="submit" className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold">
                Edit Konten
              </button>
            </div>
          </form>
        </div>
      </div>
      <RiwayatDataArtikel id={id} />
    </div>
  );
}

export default DetailArtikel;

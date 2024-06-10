import { useState } from "react"
import sabang from '../../../../assets/images/volunteerSabang.png'
import RiwayatDataVolunteer from './RiwayatDataVolunteer'
import HapusVolunteer from '../HapusVolunteer'

function DetailVolunteer() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail Volunteer</div>
        <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
            {[
              { 
                image: sabang,
                judul: 'Ayo menjadi Kakak Sabang Merauke',
                pendaftar: '30',
                target: '50',
                deskripsi: 'Program "Ayo Menjadi Kakak SabangMerauke" adalah inisiatif dari Yayasan SabangMerauke yang bertujuan untuk memperkuat rasa persatuan dan kesaruab bangsa melalui pendidikan karakter dan pengenalan kebhinekaan kepada anak-anak Indonesia. Kami mengajak seluruh lapisan masyarakat untuk berpartisipasi sebagai Kakak atau mentor bagi adik-adik dari berbagai penjuru Nusantara. Bersama-sama, kita dapat menanamkan nilai-nilai toleransi, kerjasama, dan semangat kebangsaan.'
              },
            ].map((item, index) => (
              <div key={index} className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
                <img className="w-full h-auto rounded" src={item.image} alt="Image" />
                <h1 className="p-2 text-black text-2xl font-bold">{item.judul}</h1>
                <div className="justify-start items-center gap-4 inline-flex">
                <div className="p-2 justify-start gap-2 items-start flex">
                      <img className="w-7 h-7 rounded-full" src="https://via.placeholder.com/21x21" />
                      <img className="w-7 h-7 rounded-full" src="https://via.placeholder.com/21x21" />
                      <img className="w-7 h-7 rounded-full" src="https://via.placeholder.com/21x21" />
                      <img className="w-7 h-7 rounded-full" src="https://via.placeholder.com/21x21" />
                      <p className="ps-3 text-zinc-700 font-['Roboto'] leading-none">{item.pendaftar} relawan telah bergabung</p>
                  </div>
                  
                </div>
                <div className="p-2 items-center gap-4">
                  <div className="flex-col justify-start items-start gap-1">
                    <progress className="progress progress-info w-3/4" value={item.pendaftar} max={item.target}></progress>
                    <div className="flex justify-start items-center gap-4">
                      <p className="text-sky-500 font-bold">{item.pendaftar} Pendaftar</p>
                      <p className="text-stone-400 font-medium">dari target</p>
                      <p className="text-stone-900 font-bold">{item.target} Pendaftar</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
                  <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
                  <div className="text-justify">
                    <span className="text-black font-normal">{item.deskripsi}</span>
                  </div>
                </div>
              </div>
            ))}
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
                  placeholder="Type here"
                  className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="organisasi" className="block text-gray-700 text-sm font-normal">Organisasi</label>
                <select
                  id="organisasi"
                  className="mt-1 border border-gray-300 h-12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected=""></option>
                  <option value="US">Pilih Organiasi</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="target" className="block text-gray-700 text-sm font-normal">Target Donasi</label>
                  <input
                    type="number"
                    id="target"
                    placeholder="Type here"
                    className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalMulai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal mulai</label>
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      className="bg-gray-50 border h-12 mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Tanggal selesai</label>
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      className="bg-gray-50 border h-12 mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3" onClick={openModal}>
              Hapus
            </button>
            <HapusVolunteer isOpen={isModalOpen} onClose={closeModal} />
            <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold">
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
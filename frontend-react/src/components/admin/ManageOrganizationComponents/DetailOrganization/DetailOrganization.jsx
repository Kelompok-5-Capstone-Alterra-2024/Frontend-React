import { useState } from "react"
import DetailOrganizationDonasi from "./Donasi/DetaiOrganizationDonasi";
import DetailOrganizationVolunteer from "./Volunteer/DetailOrganizationVolunteer";
import HapusDetailOrganisasi from "./HapusDetailOrganisasi"
import yayasan from "../../../../assets/images/logoYayasan.png"

function DetailOrganization() {
  const [selectedTab, setSelectedTab] = useState('detail-organization-donasi');

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();  // Prevent form submission
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  }; 

    return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail organisasi</div>
      <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
        {[
              { 
                image: yayasan,
                organisasi: 'Yayasan Berbagi Kasih',
                waktu: '27 Agustus  2020',
                deskripsi: 'Tentang Yayasan Berbagi Kasih merupakan Yayasan Independen yang lahir dari inisiatif PeduliPintar untuk mengelola dan mengimplementasikan program sosial secara profesional dan transparan. Sebagai yayasan independen, Social Project tidak hanya mengimplementasikan donasi dari PeduliPintar, melainkan juga berkolaborasi dengan beragam pihak untuk menjalankan, mengimplementasikan, dan menyalurkan donasi beragam program sosial. Telah menghubungkan jutaan dampak sosial. Sampai saat ini, Yayasan Berbagi Kasih telah menjalankan ratusan program sosial dan berkolaborasi dengan ratusan mitra kolaborator. Mulai dari pemulihan bencana alam sampai bantuan kebutuhan pokok.'
              },
            ].map((item, index) => (
              <div key={index} className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
                <div class="flex justify-center items-center">
                  <img className="w-64- h-64 rounded-full oject-cover" src={item.image} alt="Image" />
                </div>
                <h1 className="p-2 text-black text-2xl font-bold">{item.organisasi}</h1>
                <p className="ps-2 text-zinc-700 text-sm font-normal">Terdaftar sejak {item.waktu}</p>
                <div className="p-2 items-center gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-1">
                  </div>
                </div>
                <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
                  <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
                  <div className="text-justify">
                    <span className="text-black text-md font-normal">{item.deskripsi}</span>
                  </div>
                </div>
              </div>
            ))}
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
                  multiple
                />
              </div>
            </div>
            <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="namaOrganisasi" className="block text-gray-700 text-sm font-normal">Nama Organisasi</label>
                        <input type="text" id="namaOrganisasi" placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="noRekening" className="block text-gray-700 text-sm font-normal">No Rekening</label>
                        <input type="text" id="noRekeneing" placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
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
                                    datepicker=""
                                    type="date"
                                    className="bg-gray-50 border h-12 mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Select date"
                                />
                            </div>
                            <div className="flex flex-col mt-3">
                                <label htmlFor="website" className="block text-gray-700 text-sm font-normal">Website</label>
                                <input type="text" id="website" placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                                <label htmlFor="ig" className="block text-gray-700 text-sm font-normal">Instagram</label>
                                <input type="text" id="ig" placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                      </div>
                      <div className="flex flex-col">
                          <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                              <textarea
                                  id="message"
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
                  <HapusDetailOrganisasi isOpen={isModalOpen} onClose={closeModal} />
                  <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold">
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
                className="grow border-0 focus:outline-none focus:ring-0 w-40 md:w-60"
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
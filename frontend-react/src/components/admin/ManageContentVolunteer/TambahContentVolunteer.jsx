function AddVolunteer({ isOpen, onClose }) {
    if (!isOpen) return null;
      
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto">
                <h2 className="text-zinc-900 text-xl font-bold mb-6 text-center">Tambah konten Artikel</h2>
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
                            <label htmlFor="judul" className="block text-gray-700 text-sm font-normal">Judul</label>
                            <input type="text" id="judul" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="organisasi" className="block text-gray-700 text-sm font-normal">Organisasi</label>
                            <select
                                id="organisasi"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                                <input type="number" id="target" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
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
                                        datepicker=""
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date"
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
                                        datepicker=""
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Type here"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                        <button type="button" className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2 mb-2 sm:mb-0 sm:mr-2" onClick={onClose}>Batal</button>
                        <button type="submit" className="bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex text-white w-full px-4 py-2">Tambah</button>
                    </div>
            </form>
        </div>
    </div>
    )
  }
  
  export default AddVolunteer
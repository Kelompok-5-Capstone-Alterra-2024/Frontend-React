function AddArtikel({ isOpen, onClose }) {
    if (!isOpen) return null;
      
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/5">
          <h2 className=" text-zinc-900 text-xl font-bold mb-6 text-center">Tambah konten Artikel</h2>
          <form>
            <div className="mb-6">
            <div className="flex items-center">
                <label for="multiple_files" className="text-md w-28 text-white bg-sky-500 border border-gray-300 rounded-s-lg cursor-pointer p-2 text-center">
                    Pilih File
                </label>
                <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-e-lg" id="file_name">Tidak ada file yang dipilih</span>
                <input
                    className="hidden"
                    id="multiple_files"
                    type="file"
                    multiple
                />
                </div>
            </div>
            <div className="mb-6">
                <div className="flex flex-col">
                    <label htmlFor="judul" className="block text-gray-700 text-sm font-normal">Judul</label>
                    <input type="text" id="judul" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="flex flex-col mb-6 mt-6">
                    <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Type here"
                        />
                    </div>
                </div>
                <div className="flex ">
                    <button type="button" className=" bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2 mr-2" onClick={onClose}>Batal</button>
                    <button type="submit" className="bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex text-white w-full px-4 py-2">Tambah</button>
                </div>
            </form>
        </div>
    </div>
    )
  }
  
  export default AddArtikel
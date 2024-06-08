function Cashout({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto relative">
          <h2 className="text-zinc-900 pt-8 text-2xl font-bold mb-6 text-center">Salurkan Dana</h2>
        <div className="bg-sky-500 text-sm text-white py-4 px-8">
          <p>Pastikan rekening bank yang terhubung valid untuk memastikan dana donasi dapat digunakan sesuai kebutuhan amal yang dijalankan.</p>
        </div>
        <div className="p-8">
          <form>
            <div className="mb-1">
              <label htmlFor="dana" className="block text-black font-bold">Jumlah Dana yang Disalurkan*</label>
              <input type="number" id="dana" placeholder="Rp 3.900.000" className="mt-1 w-full h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:text-end placeholder:font-semibold" />
            </div>
              <div className="text-zinc-800/opacity-50 pt-1 text-xs font-normal">Minimum Rp. 20.000</div>
                <div className="mt-4">
                <h2 className="text-zinc-900 text-xl font-bold">Tujuan Penarikan</h2>
                <div className="mb-1">
                    <label htmlFor="bank" className="block mt-3 text-black font-semibold">Bank*</label>
                    <select
                        id="bank"
                        className="border mt-1 h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option selected="US">-- Pilih Bank --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="noRekening" className="block text-black font-semibold">Nomor Rekening*</label>
                  <input type="text" id="noRekening" placeholder="" className="mt-1 w-full h-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <label htmlFor="pemilikRekening" className="block text-black font-semibold">Nama Pemilik Rekening*</label>
                  <input type="text" id="pemilikRekening" placeholder="" className="mt-1 w-full h-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <p className="block text-black font-semibold">Bukti Transfer*</p>
                  <div className="mt-1 flex flex-col sm:flex-row items-center">
                            <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                                Pilih File
                            </label>
                            <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1" id="file_name">Tidak ada file yang dipilih</span>
                            <input
                                className="hidden"
                                id="multiple_files"
                                type="file"
                                multiple
                                onChange={(e) => setFormData({ ...formData, image_url: URL.createObjectURL(e.target.files[0]) })}
                            />
                        </div>
                </div>  
              </div>
                  <div className="flex flex-col sm:flex-row mt-8">
                      <button type="button" className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2 mb-2 sm:mb-0 sm:mr-2" onClick={onClose}>Batal</button>
                      <button type="submit" className="bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex text-white w-full px-4 py-2">Kirim Donasi</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Cashout
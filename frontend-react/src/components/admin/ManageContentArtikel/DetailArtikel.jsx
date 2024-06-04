import nganjuk from '../../../assets/images/artikelNganjuk.png'
import RiwayatDataArtikel from './RiwayatDataArtikel'

function DetailArtikel() {

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      <div className="text-zinc-600 text-base font-normal mb-4">Donasi / Detail Artikel</div>
        <div className="grid grid-cols-1 flex-col lg:grid-cols-2 gap-4">
        <div className="bg-transparent">
            {[
              { 
                image: nganjuk,
                judul: 'Cerita Mbah Sukirah, Lansia Rawat Anak Gangguan Jiwa',
                waktu: 'Selasa,21 Mei 2024 11:54 WIB',
                komentar: '30',
                simpan: '50',
                deskripsi: 'Di desa Mertelu Kulon, Yogyakarta, sebuah rumah kecil menjadi tempat tinggal bagi Mbah Sukirah, seorang lansia yang usianya telah mencapai 82 tahun. Namun, semangatnya untuk menjaga anaknya yang menderita gangguan kejiwaan tetap ada. Meskipun kesehatan dan ekonominya terbatas, .... '
              },
            ].map((item, index) => (
              <div key={index} className="p-1 bg-white rounded-lg shadow justify-start items-start gap-2">
                <img className="w-full h-auto rounded" src={item.image} alt="Image" />
                <h1 className="p-2 text-black text-2xl font-bold">{item.judul}</h1>
                <p className="ps-2 text-zinc-700 text-sm font-normal">{item.waktu}</p>
                <div className="p-2 items-center gap-4 inline-flex">
                  <div className="flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-center gap-4">
                      <p className="text-sky-500 font-bold">{item.komentar} Komentar</p>
                      <p className="text-stone-900 font-bold">{item.simpan} User menyimpan</p>
                    </div>
                  </div>
                </div>
                <div className="w-full p-2 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 flex">
                  <h1 className="text-cyan-600 font-bold">Deskripsi</h1>
                  <div className="text-justify">
                    <span className="text-black text-xs font-normal">{item.deskripsi}</span>
                    <span className="text-cyan-600 text-xs font-normal">Read More</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow max-h-screen">
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
                        <input type="text" id="judul" placeholder="Type here" className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                <div className="flex flex-col">
                  <label htmlFor="tanggalSelesai" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                          <textarea
                              id="message"
                              rows={15}
                              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Type here"
                          />  
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg gap-2 me-3">
                Hapus
              </button>
              <button className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold">
                Edit Konten
              </button>
            </div>
          </form>
        </div>
      </div>
      <RiwayatDataArtikel/>
    </div>
  )
}

export default DetailArtikel
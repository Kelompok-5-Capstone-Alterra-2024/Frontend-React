import up from '../../../assets/images/arrowUp.svg';
import right from '../../../assets/images/rightIcon.svg';

function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <div className="w-full p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
              <p className="text-zinc-500 text-xs pb-1">DONASI TERKUMPUL</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-zinc-900 text-xl font-semibold">Rp.3.900.000,00</p>
                <div className="flex items-center gap-0">
                  <p className="text-green-500 text-sm">+ 12%</p>
                  <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                <p className="text-zinc-500 text-xs pb-1">JUMLAH RELAWAN</p>
                <div className="flex justify-between items-center w-full">
                  <p className="text-zinc-900 text-xl font-semibold">2.900 Orang</p>
                  <div className="flex items-center gap-0">
                    <p className="text-green-500 text-sm">+ 8%</p>
                    <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                  </div>
                </div>
              </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
              <p className="text-zinc-500 text-xs">JUMLAH ARTIKEL UPLOAD</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-zinc-900 text-xl font-semibold">426</p>
                <div className="flex items-center gap-0">
                  <p className="text-green-500 text-sm">+ 24%</p>
                  <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
              <p className="text-zinc-500 text-xs">JUMLAH TRANSAKSI</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-zinc-900 text-xl font-semibold">700</p>
                <div className="flex items-center gap-0">
                  <p className="text-green-500 text-sm">+ 9%</p>
                  <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-900 text-3xl font-bold pb-1">Rp. 89 Juta</p>
                  <p className="text-gray-500">Transaksi</p>
                </div>
                <div className="flex items-center gap-0">
                  <p className="text-green-500 font-semibold text-sm">+ 12%</p>
                  <img className="w-3 ml-1" src={up} alt="Arrow Up" />
                </div>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg"></div>
              <div className="flex justify-between items-center mt-4 border-t pt-4">
                <p className="text-gray-500">7 Hari</p>
                <p className="text-blue-700 uppercase">Juni</p>
              </div>
            </div>
            <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <div className="w-full flex flex-col mb-4">
                <p className="text-zinc-900 text-base pb-1 font-bold">Organisasi</p>
                <p className="text-zinc-500 text-sm">Organisasi yang terdaftar saat ini</p>
              </div>
              <div className="flex-1 w-full">
                <div className="flex items-center p-2">
                  <img className="w-9 h-9 rounded-full" src="https://via.placeholder.com/36x36" alt="Content" />
                  <div className="ml-2">
                    <p className="text-zinc-900 text-sm font-semibold">Kesalahan Maratua Indonesia</p>
                    <p className="text-zinc-500 text-sm">yayasankalasahan@gmail.com</p>
                  </div>
                </div>
                <button className="bg-gray-100 flex text-sky-500 text-xs py-1 px-4 rounded border mt-4">
                  Lihat Semua Organisasi
                  <img className="w-3 m-1" src={right} alt="right" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <div className="w-full flex flex-col mb-4">
                <p className="text-zinc-900 text-base font-bold">Donasi</p>
                <p className="text-zinc-500 text-sm">Kategori donasi paling populer</p>
              </div>
            <div className="w-56 h-56 bg-sky-800 rounded-full mb-2"></div>
              <div className="text-center mt-4">
                <p className="text-gray-900 text-3xl">Top</p>
                <p className="text-emerald-600 text-sm">25%</p>
              </div>
            </div>
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <div className="w-full flex flex-col mb-4">
              <p className="text-zinc-900 text-base font-bold">Top Konten Volunteer</p>
              <p className="text-zinc-500 text-sm">Konten volunteer paling banyak pendaftar</p>
            </div>
          <div className="flex-1 w-full">
            <div className="flex items-center border p-2 rounded mb-2">
              <img className="w-9 h-9 rounded-sm" src="https://via.placeholder.com/36x36" alt="Content" />
                <div className="ml-2">
                  <p className="text-zinc-900 text-sm font-semibold">Aksi Relawan Kebersihan</p>
                  <p className="text-zinc-500 text-sm">Jumlah Pendaftar: <span className="text-sky-500">98</span></p>
                </div>
              </div>
              <button className="bg-gray-100 flex text-sky-500 text-xs py-1 px-4 rounded border mt-4">
                Lihat Semua Konten Volunteer
                <img className="w-3 m-1" src={right} alt="right" />
              </button>
            </div>
          </div>
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <div className="w-full flex flex-col mb-4">
              <p className="text-zinc-900 text-base font-bold">Artikel</p>
              <p className="text-zinc-500 text-sm">Artikel palig sering dibaca</p>
            </div>
            <div className="flex-1 w-full">
              <div className="flex items-center border p-2 rounded mb-2">
                <img className="w-9 h-9 rounded-sm" src="https://via.placeholder.com/36x36" alt="Content" />
                <div className="ml-2">
                  <p className="text-zinc-900 text-sm font-semibold">Aksi Relawan Kebersihan</p>
                  <p className="text-zinc-500 text-sm">Jumlah Pembaca: <span className="text-sky-500">98</span></p>
                </div>
              </div>
              <button className="bg-gray-100 flex text-sky-500 text-xs py-1 px-4 rounded border mt-4">
                Lihat Semua Artikel
                <img className="w-3 m-1" src={right} alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

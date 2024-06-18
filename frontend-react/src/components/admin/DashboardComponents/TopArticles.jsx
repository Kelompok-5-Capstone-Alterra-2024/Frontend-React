import right from '../../../assets/images/rightIcon.svg';

function TopArticles() {
  return (
      <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="w-full flex flex-col mb-4">
          <p className="text-zinc-900 text-base font-bold">Top Artikel</p>
          <p className="text-zinc-500 text-sm">Artikel paling sering dibaca</p>
        </div>
        <div className="flex-1 w-full">
          <div className="flex items-center border p-2 rounded mb-2">
            <img className="w-9 h-9 rounded-sm" src="https://via.placeholder.com/36x36" alt="Content" />
            <div className="ml-2">
              <p className="text-zinc-900 text-sm font-semibold">Aksi Relawan Kebersihan</p>
              <p className="text-zinc-500 text-sm">Jumlah User menyimpan : <span className="text-sky-500">98</span></p>
            </div>
          </div>
          <button className="bg-gray-100 flex text-sky-500 text-xs py-1 px-4 rounded border mt-4">
            Lihat Semua Artikel
            <img className="w-3 m-1" src={right} alt="right" />
          </button>
        </div>
      </div>
  )
}

export default TopArticles
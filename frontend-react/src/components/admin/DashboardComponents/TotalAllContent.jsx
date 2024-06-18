import up from '../../../assets/images/arrowUp.svg';

function TotalAllContent() {
  return (
    <div className="">
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
    </div>
  )
}

export default TotalAllContent
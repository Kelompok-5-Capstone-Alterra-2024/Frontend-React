function TopDonationCategory() {
  return (
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
  )
}

export default TopDonationCategory
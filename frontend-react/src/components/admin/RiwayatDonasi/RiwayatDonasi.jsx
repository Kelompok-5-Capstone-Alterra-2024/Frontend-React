const RiwayatDonasi = () => {
  return (
    <div className="p-4 shadow-lg rounded-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">Riwayat Donasi</h1>
          <p className="text-gray-500 pt-2">Riwayat data donasi</p>
        </div>
        <div className="mt-4">
          <label className="input input-bordered flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              className="grow border-0 focus:outline-none focus:ring-0 lg:w-96"
              placeholder="Search"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default RiwayatDonasi;

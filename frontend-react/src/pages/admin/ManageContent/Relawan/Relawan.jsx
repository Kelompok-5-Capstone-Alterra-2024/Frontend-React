import up from '../../../../assets/images/arrowUpBlue.svg';
import search from '../../../../assets/images/search.png';
import edit from '../../../../assets/images/PencilSimple.svg';
import trash from '../../../../assets/images/Trash.svg';

function Relawan() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-5">
      <div className="w-full flex gap-20 items-center mb-6">
        <div className="text-black text-2xl font-semibold font-['Roboto']">Manage Content Volunteer</div>
          <button className="px-4 py-2 bg-sky-500 text-gray-50 text-sm font-semibold rounded-lg">Tambah Content Volunteer</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
            <p className="text-zinc-500 text-xs pb-1">Jumlah Content Volunteer Aktif</p>
              <div className="flex justify-between items-center w-full">
                <p className="text-zinc-900 text-xl font-semibold">130 Content</p>
                  <div className="flex items-center gap-0">
                    <p className="text-sky-500 text-sm">+ 12%</p>
                    <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                <p className="text-zinc-500 text-xs pb-1">Jumlah Volunteer</p>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-zinc-900 text-xl font-semibold">Rp.3.900.000,00</p>
                      <div className="flex items-center gap-0">
                        <p className="text-sky-500 text-sm">+ 12%</p>
                        <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                      </div>
                    </div>
                  </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                  <p className="text-zinc-500 text-xs">Content Tidak Aktif</p>
                    <div className="flex justify-between items-center w-full">
                    <p className="text-zinc-900 text-xl font-semibold">5</p>
                    <div className="flex items-center gap-0">
                      <p className="text-sky-500 text-sm">+ 12%</p>
                      <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
                  <p className="text-zinc-500 text-xs">Content Volunteer Selesai</p>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-zinc-900 text-xl font-semibold">25</p>
                      <div className="flex items-center gap-0">
                        <p className="text-sky-500 text-sm">+ 9%</p>
                        <img className="w-2 ml-1" src={up} alt="Arrow Up" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid pt-5">
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="w-full h-auto md:h-[102px] px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-col justify-start items-start gap-2">
                    <div className="text-black text-2xl md:text-[32px] font-bold leading-10 pb-2">Volunteer</div>
                    <div className="text-zinc-900/opacity-40 text-base font-normal">Tabel data volunteer</div>
                  </div>
                  <div className="w-full md:w-96 flex-col justify-start items-start gap-2 mt-4 md:mt-0">
                    <div className="w-full bg-gray-50 rounded-lg border border-gray-300 flex justify-start items-center gap-2.5">
                      <div className="w-4 h-4 relative" />
                      <img src={search} alt="search" />
                      <input
                        type="text"
                        className="w-full bg-transparent border-none text-gray-500 text-sm font-normal leading-[17.50px] focus:outline-none"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto border-b-8 mb-3">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="uppercase bg-sky-500 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Judul
                            <a href="#">
                              <svg
                                className="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </a>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Organisasi
                            <a href="#">
                              <svg
                                className="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </a>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <div className="flex items-center">
                            Target
                            <a href="#">
                              <svg
                                className="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </a>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Terkumpul
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="px-6 py-4">Bantu Banjir Demak Kembali Pulih</td>
                        <td className="px-6 py-4">Disaster Project</td>
                        <td className="px-6 py-4">15.000.000.000</td>
                        <td className="px-6 py-4">5.000.000.00</td>
                        <td className="px-6 py-4">
                          <div className="px-2 py-1 bg-emerald-100 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-neutral-700 text-xs font-normal font-['Roboto'] leading-[18px]">Selesai</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right flex">
                          <img className="pe-3" src={edit} alt="edit" />
                          <img src={trash} alt="hapus" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-gray-500 text-md font-normal leading-[21px]">Showing </span>
                    <span className="text-gray-900 text-md font-semibold leading-[21px]">1-10</span>
                    <span className="text-gray-500 text-md font-normal leading-[21px]"> of </span>
                    <span className="text-gray-900 text-md font-semibold leading-[21px]">1000</span>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Previous
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>    
              </div>
            </div>
          </div>
  )
}

export default Relawan
  import { useState } from "react";
  import unduhDetail from "../../../assets/images/unduh-detail.png";
  import DetailUserDonasi from "./DetailUserDonasi";
  import DetailUserVolunteer from "./DetailUserVolunteer";

  function DetailUser() {
    const [selectedTab, setSelectedTab] = useState('detail-user-donasi'); 

    return (
      <div className="bg-neutral-50 min-h-screen p-4">
        <div className="shadow-xl rounded-xl p-5">
          {/* Profile User */}
          <div className="w-full sm:w-auto overflow-x-auto p-1">
          <div className="w-[1006px] h-[263px] relative rounded-xl border border-gray-400">
            <div className="w-[674px] h-[0px] left-[332px] top-[131px] absolute border border-gray-400"></div>
            <div className="left-[672px] top-[41px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight">Email</div>
              <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">agung123@gmail.com</div>
            </div>
            <div className="left-[672px] top-[173px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight">Tanggal Register</div>
              <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">12 Mei 2024</div>
            </div>
            <div className="left-[428px] top-[41px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight">Username</div>
              <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">agung123</div>
            </div>
            <div className="left-[428px] top-[173px] absolute flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight">Nomor Telefon</div>
              <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">081290575320</div>
            </div>
            <div className="w-[263px] h-[0px] left-[332px] top-0 absolute origin-top-left rotate-90 border border-gray-400"></div>
            <div className="left-[85px] top-[209px] absolute">
              <span style={{ color: 'black', fontSize: '1.25rem', fontWeight: '600', fontFamily: 'Roboto', lineHeight: '1.75rem' }}>Agung Rizky </span>
              <span style={{ color: 'rgb(14 165 233)', fontSize: '1rem', fontWeight: '600', fontFamily: 'Roboto', lineHeight: '1.5rem' }}>| ID: 01</span>
            </div>
            <img className="w-[172px] h-[172px] left-[80px] top-[26px] absolute rounded-full shadow" src="https://via.placeholder.com/172x172" />
            <div className="p-0.5 left-[923px] top-[36px] absolute bg-white flex-col justify-center items-center inline-flex">
              <div className="justify-center items-center gap-1.5 inline-flex">
                <div className="text-sky-500 text-xs font-normal font-['Roboto'] leading-none">Edit</div>
                <div className="w-3.5 h-3.5 relative" />
              </div>
            </div>
          </div>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-between mt-4">
            {/* Bagian kiri */}
            <div className="left">
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex">
                  <li>
                    <button
                      className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                        selectedTab === 'detail-user-donasi' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedTab('detail-user-donasi')}
                    >
                      Donasi
                    </button>
                  </li>
                  <li>
                    <button
                      className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                        selectedTab === 'detail-user-volunteer' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedTab('detail-user-volunteer')}
                    >
                      Volunteer
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Bagian kanan */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4 md:mt-0">
              <label className="input input-bordered flex items-center gap-2 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  className="grow border-0 focus:outline-none focus:ring-0 w-40 md:w-60"
                  placeholder="Search"
                />
              </label>
              <button>
                <img className="w-28 h-10" src={unduhDetail} alt="Unduh Detail" />
              </button>
            </div>
          </div>
          {/* Table */}
          <div>
            {selectedTab === 'detail-user-donasi' ? <DetailUserDonasi /> : <DetailUserVolunteer />}
          </div>
        </div>
      </div>
    )
  }

  export default DetailUser

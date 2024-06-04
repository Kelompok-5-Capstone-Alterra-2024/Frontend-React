import { useState } from 'react';
import unduhDetail from "../../../assets/images/unduh-detail.png";
import RiwayatTransaksi from "../../../components/admin/RiwayatTransaksi/RiwayatTransaksi";
import RiwayatDonasi from "../../../components/admin/RiwayatDonasi/RiwayatDonasi"; // Import RiwayatDonasi component
import up from '../../../assets/images/arrowUpGreen.png';
// import hand from "../../../assets/images/HandHeart.png";
// import money from "../../../assets/images/Money_fill.png";
// import wallet from "../../../assets/images/Wallet.png";

function Transaksi() {
  const [selectedTab, setSelectedTab] = useState('transaksi'); // State to manage selected tab

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col p-4">
      {/* card */}
      <div className="w-full flex gap-4 items-center mb-6">
        <div className="text-black text-2xl font-semibold font-['Roboto']">Transaksi</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            label: 'Total Donasi Terkumpul',
            value: '3.900.000.00',
            grade: '12',
          },
          {
            label: 'Jumlah Transaksi',
            value: '1.300',
            grade: '12',
          },
          {
            label: 'Penghasilan',
            value: '1.900.000',
            grade: '12',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
            <p className="text-zinc-500 text-xs pb-1">{item.label}</p>
            <div className="flex justify-between items-center w-full">
              <p className="text-zinc-900 text-xl font-semibold">{item.value}</p>
              <div className="flex items-center gap-0">
                <p className="text-green-400 text-sm">+ {item.grade} %</p>
                <img className="w-2 ml-1" src={up} alt="Arrow Up" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* tabs */}
      <div className="flex flex-wrap justify-between">
        {/* Bagian kiri */}
        <div className="left">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex">
              <li>
                <button
                  className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                    selectedTab === 'donasi' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTab('donasi')}
                >
                  Riwayat Donasi
                </button>
              </li>
              <li>
                <button
                  className={`inline-block pt-5 pb-2 px-10 border-b-2 rounded-t-lg ${
                    selectedTab === 'transaksi' ? 'text-blue-600 border-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTab('transaksi')}
                >
                  Riwayat Transaksi
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Bagian kanan */}
        <div className="right p-4">
          <button>
            <img className="w-28 h-10" src={unduhDetail} alt="Unduh Detail" />
          </button>
        </div>
      </div>
      {/* Table */}
      <div>
        {selectedTab === 'transaksi' ? <RiwayatTransaksi /> : <RiwayatDonasi />}
      </div>
    </div>
  );
}

export default Transaksi;


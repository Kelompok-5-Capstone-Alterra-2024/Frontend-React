import { useState } from 'react';
import unduhDetail from "../../../assets/images/unduh-detail.png";
import RiwayatTransaksi from "../../../components/admin/RiwayatTransaksi/RiwayatTransaksi";
import RiwayatDonasi from "../../../components/admin/RiwayatDonasi/RiwayatDonasi"; // Import RiwayatDonasi component
import hand from "../../../assets/images/HandHeart.png";
import money from "../../../assets/images/Money_fill.png";
import wallet from "../../../assets/images/Wallet.png";

function Transaksi() {
  const [selectedTab, setSelectedTab] = useState('transaksi'); // State to manage selected tab

  return (
    <div className="bg-neutral-50 min-h-screen p-4">
      {/* card */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {[
          {
            bgColor: 'bg-sky-100',
            borderColor: '',
            textColor: 'text-sky-500',
            label: 'Total Donasi Terkumpul',
            value: 'RP. 3.900.000,00',
            icon: hand,
          },
          {
            bgColor: 'bg-sky-200',
            borderColor: '',
            textColor: 'text-cyan-600',
            label: 'Jumlah Transaksi',
            value: '1.300',
            icon: money,
          },
          {
            bgColor: 'bg-green-200',
            borderColor: '',
            textColor: 'text-green-400',
            label: 'Penghasilan',
            value: 'RP. 1.900.000,00',
            icon: wallet,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-5 bg-white rounded-xl shadow ${
              item.borderColor ? `border ${item.borderColor}` : ''
            } flex items-center gap-4`}
          >
            <div className={`${item.bgColor} p-2.5 rounded-xl flex justify-center items-center`}>
              {item.icon ? (
                <img className="w-10 h-10" src={item.icon} alt="icon" />
              ) : (
                <div className="w-12 h-12" />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-gray-700 text-base font-normal leading-tight">{item.label}</div>
              <div className={`text-2xl font-semibold leading-[30px] ${item.textColor}`}>{item.value}</div>
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


import { useState } from 'react';
import InputNominalDonasi from './InputNominalDonasi';
import BuktiTransfer from './BuktiTransfer';

const TableRiwayatDonasi = ({data, setData}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleConfirmClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleModalSubmit = (amount) => {
    const updatedData = data.map(d =>
      d.id === currentItem.id ? { ...d, amount: parseInt(amount, 10), aksi: true } : d
    );
    setData(updatedData); // Use setData to update the data state in the parent component
    setShowModal(false);
  };

  const handleImageClick = (item) => {
    setCurrentItem(item);
    setShowImageModal(true);
  };
 
  {/* jika data tidak ada */}
  if (!data || data.length === 0) {
    return (
      <div className="relative overflow-x-auto shadow-md mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary-main">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Nama
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Judul
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Organisasi
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Donasi</th>
            <th scope="col" className="px-6 py-3">Bukti Transfer</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
      </table>
    </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary-main">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Nama
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Judul
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Organisasi
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Donasi</th>
            <th scope="col" className="px-6 py-3">Bukti Transfer</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
              </th>
              <td className="px-6 py-4">{item.user_fullname}</td>
              <td className="px-6 py-4">{item.fundraising_title}</td>
              <td className="px-6 py-4">{item.organization_name}</td>
              <td className="px-6 py-4">{item.amount}</td>
              <td className="px-6 py-4">
                <button onClick={() => handleImageClick(item)}>
                  <span className="text-blue-500 underline">bukti_tf.jpg</span>
                </button>
              </td>
              <td className="px-6 py-4">{item.created_at}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleConfirmClick(item)}
                  className={`rounded-xl px-2 py-1 text-white ${item.aksi ? 'bg-success-main' : 'bg-error-main'}`}
                >
                  {item.aksi ? 'Confirmed' : 'Confirm'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <InputNominalDonasi
          onSubmit={handleModalSubmit}
          onCancel={() => setShowModal(false)}
          itemId={currentItem.id}
        />
      )}
      {showImageModal && currentItem && (
        <BuktiTransfer
          src={currentItem.image_payment}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
  
};
  
export default TableRiwayatDonasi;
  
import { useState } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../../assets/images/PencilSimple.svg';
import trash from '../../../assets/images/Trash.svg';
import HapusOrganisasi from './HapusOrganisasi';

const TabelDataOrganisasi = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openModal = (id) => {
    setSelectedItemId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItemId(null);
  };

  {/* jika data tidak ada */}
  if (!data || data.length === 0) {
    return (
      <div className="overflow-x-auto shadow-md mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary-main">
          <tr>
            <th scope="col" className="px-6 py-3">id</th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Nama Organisasi
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Tanggal Bergabung</th>
            <th scope="col" className="px-6 py-3">Website</th>
            <th scope="col" className="px-6 py-3">Instagram</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
      </table>
    </div>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary-main">
          <tr>
            <th scope="col" className="px-6 py-3">id</th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Nama Organisasi
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Tanggal Bergabung</th>
            <th scope="col" className="px-6 py-3">Website</th>
            <th scope="col" className="px-6 py-3">Instagram</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
              </th>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.join_date}</td>
              <td className="px-6 py-4">{item.website}</td>
              <td className="px-6 py-4">{item.instagram}</td>
              <td className="px-6 py-4">{item.no_rek}</td>
              <td className="ps-2 pt-4 flex">
                <Link to={`detail-organization/${item.id}`}>
                    <button>
                      <img className="pe-3" src={edit} alt="edit" />
                    </button>
                </Link>
                <button onClick={() => openModal(item.id)}>
                  <img src={trash} alt="hapus" className="w-6 h-6" />
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <HapusOrganisasi
        isOpen={isModalOpen}
        onClose={closeModal}
        itemId={selectedItemId}
      />
    </div>
  );
};

export default TabelDataOrganisasi;

import { Link } from "react-router-dom";

const TableRiwayatTransaksi = ({data}) => {

  {/* jika data tidak ada */}
  if (!data || data.length === 0) {
    return (
      <div className="relative overflow-x-auto shadow-md mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-primary-main">
          <tr>
            <th scope="col" className="px-6 py-3">id</th>
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
            <th scope="col" className="px-6 py-3">Donasi Disalurkan</th>
            <th scope="col" className="px-6 py-3">Pembayaran</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Status</th>
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
            <th scope="col" className="px-6 py-3">id</th>
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
            <th scope="col" className="px-6 py-3">Donasi Disalurkan</th>
            <th scope="col" className="px-6 py-3">Pembayaran</th>
            <th scope="col" className="px-6 py-3">No Rekening</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
              </th>
              <td className="px-6 py-4">{item.organization_name}</td>
              <td className="px-6 py-4">{item.amount}</td>
              <td className="px-6 py-4">{item.payment_method}</td>
              <td className="px-6 py-4">{item.no_rekening}</td>
              <td className="px-6 py-4">{item.created_at}</td>
              <td className="px-6 py-4 text-sidebar-1">
                <Link to={`detail-transaksi/${item.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRiwayatTransaksi;

const TableDetailUserDonasi = () => {
    const data = [
        {
            id: 1,
            namaProgramDonasi: "Bantu Banjir Demak Kembali Pulih",
            namaOrganisasi: "Yayasan Berbagi Kasih",
            nominalDonasi: "Rp. 1.500.000,00",
            tanggalTransaksi: "10 Juli 2024",
        },
        {
            id: 2,
            namaProgramDonasi: "Bantu Banjir Demak Kembali Pulih",
            namaOrganisasi: "Yayasan Berbagi Kasih",
            nominalDonasi: "Rp. 1.500.000,00",
            tanggalTransaksi: "10 Juli 2024",
        },
        {
            id: 3,
            namaProgramDonasi: "Bantu Banjir Demak Kembali Pulih",
            namaOrganisasi: "Yayasan Berbagi Kasih",
            nominalDonasi: "Rp. 1.500.000,00",
            tanggalTransaksi: "10 Juli 2024",
        }
    ];
  
    return (
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-primary-main">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  ID Transaksi
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Nama Program Donasi</th>
              <th scope="col" className="px-6 py-3">Nama Organisasi</th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Nominal Donasi
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Tanggal Transaksi
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.namaProgramDonasi}</td>
                <td className="px-6 py-4">{item.namaOrganisasi}</td>
                <td className="px-6 py-4">{item.nominalDonasi}</td>
                <td className="px-6 py-4">{item.tanggalTransaksi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableDetailUserDonasi;
  
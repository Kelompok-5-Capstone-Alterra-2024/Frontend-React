const TableDetailOrganizationVolunteer = () => {
    const data = [
        {
            no: 1,
            judul: "Ayo menjadi Kakak SabangMerauke",
            tanggalMulai: "20 Juli 2024",
            kapasitas: "2000",
            terdaftar: "1500",
            status: "aktif",
        },
        {
            no: 2,
            judul: "Ayo menjadi Kakak SabangMerauke",
            tanggalMulai: "20 Juli 2024",
            kapasitas: "2000",
            terdaftar: "1500",
            status: "aktif",
        },
        {
            no: 3,
            judul: "Ayo menjadi Kakak SabangMerauke",
            tanggalMulai: "20 Juli 2024",
            kapasitas: "2000",
            terdaftar: "1500",
            status: "aktif",
        }
    ];
  
    return (
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-primary-main">
            <tr>
            <th scope="col" className="px-6 py-3">no</th>
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
              <th scope="col" className="px-6 py-3">Mulai</th>
              <th scope="col" className="px-6 py-3">Kapasitas</th>
              <th scope="col" className="px-6 py-3">Terdaftar</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.no}
                </th>
                <td className="px-6 py-4">{item.judul}</td>
                <td className="px-6 py-4">{item.tanggalMulai}</td>
                <td className="px-6 py-4">{item.kapasitas}</td>
                <td className="px-6 py-4">{item.terdaftar}</td>
                <td className="px-6 py-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableDetailOrganizationVolunteer;
  
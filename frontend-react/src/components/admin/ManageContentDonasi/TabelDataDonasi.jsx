import { Link } from 'react-router-dom';
import edit from '../../../assets/images/PencilSimple.svg';
import trash from '../../../assets/images/Trash.svg'

const TabelDataDonasi = () => {
    const data = [
      {
        id: 1,
        judul: "Bantu Banjir Demak Kemballi Pulih",
        organisasi: "Disaster Project",
        target: "15.000.0000.000",
        terkumpul: "5.000.000.000",
        status: "selesai"
      },
      {
        id: 2,
        judul: "Bantu Banjir Demak Kemballi Pulih",
        organisasi: "Disaster Project",
        target: "15.000.0000.000",
        terkumpul: "5.000.000.000",
        status: "selesai"
      },
      {
        id: 3,
        judul: "Bantu Banjir Demak Kemballi Pulih",
        organisasi: "Disaster Project",
        target: "15.000.0000.000",
        terkumpul: "5.000.000.000",
        status: "selesai"
      }
    ];
  
    return (
      <div className="overflow-x-auto shadow-md mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-primary-main">
            <tr>
              <th scope="col" className="px-6 py-3">id</th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  judul
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  organisasi
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  target
                  <a href="#">
                    <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">terkumpul</th>
              <th scope="col" className="px-6 py-3">status</th>
              <th scope="col" className="px-6 py-3">aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.judul}</td>
                <td className="px-6 py-4">{item.organisasi}</td>
                <td className="px-6 py-4">{item.target}</td>
                <td className="px-6 py-4">{item.terkumpul}</td>
                <td className="px-6 py-4">
                    <div className="px-2 py-1 bg-emerald-100 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-neutral-700 text-xs font-normal font-['Roboto'] leading-[18px]">{item.status}</div>
                    </div>
                </td>
                <td className="px-6 py-4 flex">
                  <Link to="detail-donasi">
                    <button>
                      <img className="pe-3" src={edit} alt="edit" />
                    </button>
                  </Link>
                  <Link to="detail-donasi">
                    <button>
                      <img src={trash} alt="hapus" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default TabelDataDonasi
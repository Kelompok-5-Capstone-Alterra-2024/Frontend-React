import { useEffect, useState } from 'react';
import up from '../../../assets/images/arrowUp.svg';

function TotalAllContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTotalAllContent();
  }, []);

  const accessToken = sessionStorage.getItem('access_token');
  const getTotalAllContent = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/data-total-content`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
          <p className="text-zinc-500 text-xs pb-1">DONASI TERKUMPUL</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-zinc-900 text-xl font-semibold">Rp.{data.total_donations_amount}</p>
            <div className="flex items-center gap-0">
              <p className="text-green-500 text-sm">+ {data.donation_amount_change}</p>
              <img className="w-2 ml-1" src={up} alt="Arrow Up" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
          <p className="text-zinc-500 text-xs pb-1">JUMLAH RELAWAN</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-zinc-900 text-xl font-semibold">{data.total_user_volunteers} Orang</p>
            <div className="flex items-center gap-0">
              <p className="text-green-500 text-sm">+ {data.volunteer_user_change}</p>
              <img className="w-2 ml-1" src={up} alt="Arrow Up" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
          <p className="text-zinc-500 text-xs">JUMLAH ARTIKEL UPLOAD</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-zinc-900 text-xl font-semibold">{data.total_articles}</p>
            <div className="flex items-center gap-0">
              <p className="text-green-500 text-sm">+ {data.article_change}</p>
              <img className="w-2 ml-1" src={up} alt="Arrow Up" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col">
          <p className="text-zinc-500 text-xs">JUMLAH TRANSAKSI</p>
          <div className="flex justify-between items-center w-full">
            <p className="text-zinc-900 text-xl font-semibold">{data.total_donations}</p>
            <div className="flex items-center gap-0">
              <p className="text-green-500 text-sm">+ {data.donation_change}</p>
              <img className="w-2 ml-1" src={up} alt="Arrow Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalAllContent
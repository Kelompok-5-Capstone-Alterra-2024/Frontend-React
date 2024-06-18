import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import right from '../../../assets/images/rightIcon.svg';

function TopArticles() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopArticles();
  }, []);

  const accessToken = sessionStorage.getItem('access_token');
  const getTopArticles = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/articles-top`, {
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

  const handleNavigate = () => {
    navigate('/admin/manage-content/artikel');
  };

  return (
    <div className="md:col-span-1 bg-white p-4 rounded-lg shadow flex flex-col items-center">
      <div className="w-full flex flex-col mb-4">
        <p className="text-zinc-900 text-base font-bold">Top Artikel</p>
        <p className="text-zinc-500 text-sm">Artikel paling favorit</p>
      </div>
      <div className="flex-1 w-full">
        {data.map((item) => (
          <div key={item.id} className="flex items-center border p-2 rounded mb-2">
            <img className="w-9 h-9 rounded-sm" src={item.image_url} alt="Content" />
            <div className="ml-2">
              <p className="text-zinc-900 text-sm font-semibold">{item.title}</p>
              <p className="text-zinc-500 text-sm">Jumlah User menyimpan : 
                <span className="text-sky-500"> {item.bookmark_count}</span>
              </p>
            </div>
          </div>
        ))}
        <button 
          onClick={handleNavigate}
          className="bg-gray-100 flex text-sky-500 text-xs py-1 px-4 rounded border mt-4">
          Lihat Semua Artikel
          <img className="w-3 m-1" src={right} alt="right" />          
        </button>
      </div>
    </div>
  )
}

export default TopArticles
import { useEffect, useState } from 'react';

function Notification() {
  const [data, setData] = useState([]);
  const accessToken = sessionStorage.getItem('access_token');

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/notifications`, {
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
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto p-4">
        {data.map((notification) => (
          <div key={notification.ID} className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <img src={notification.avatar_url} alt={notification.user_name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="text-sm font-semibold">{notification.user_name}</h3>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;

const notifications = [
  { id: 1, name: 'Bonnie Green', message: 'Bonnie green Bergabung ke peduli pintar.' },
  { id: 2, name: 'Jony w', message: 'Jony melakukan donasi sebesar Rp.150.000 untuk korban banjir.' },
  { id: 3, name: 'Shelly', message: 'Shelly Bergabung ke peduli pintar.' },
  { id: 4, name: 'Jimy', message: 'Jimy Bergabung ke peduli pintar.' },
  { id: 5, name: 'Chelsea', message: 'Chelsea melakukan donasi sebesar Rp.50.000 untuk Panti asuhan.' }
];

function Notification() {
  return (
    <div className="bg-neutral-50 min-h-screen">
    <div className="max-w-5xl mx-auto pt-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow">
          <div className="flex items-center">
            <img src={`https://i.pravatar.cc/50?u=${notification.id}`} alt={notification.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h3 className="text-sm font-semibold">{notification.name}</h3>
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

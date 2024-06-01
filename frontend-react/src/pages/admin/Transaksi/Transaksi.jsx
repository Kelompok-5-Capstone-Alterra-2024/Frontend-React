function Transaksi() {
  return (
    <div className="bg-neutral-50 min-h-screen p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {[
          {
            bgColor: 'bg-sky-100',
            borderColor: '',
            textColor: 'text-sky-500',
            label: 'Total Donasi Terkumpul',
            value: 'RP. 3.900.000,00',
          },
          {
            bgColor: 'bg-sky-200',
            borderColor: '',
            textColor: 'text-cyan-600',
            label: 'Jumlah Transaksi',
            value: '1.300',
            icon: 'https://via.placeholder.com/40x28',
          },
          {
            bgColor: 'bg-green-200',
            borderColor: '',
            textColor: 'text-green-400',
            label: 'Penghasilan',
            value: 'RP. 1.900.000,00',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-5 bg-white rounded-xl shadow ${
              item.borderColor ? `border ${item.borderColor}` : ''
            } flex items-center gap-4`}
          >
            <div className={`${item.bgColor} p-2.5 rounded-xl flex justify-center items-center`}>
              {item.icon ? (
                <img className="w-10 h-7" src={item.icon} alt="icon" />
              ) : (
                <div className="w-12 h-12" />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-gray-700 text-base font-normal leading-tight">{item.label}</div>
              <div className={`text-2xl font-semibold leading-[30px] ${item.textColor}`}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaksi;

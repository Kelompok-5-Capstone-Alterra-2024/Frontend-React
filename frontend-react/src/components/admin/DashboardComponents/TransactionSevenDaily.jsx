import up from '../../../assets/images/arrowUp.svg';

function TransactionSevenDaily() {
  return (
    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-900 text-3xl font-bold pb-1">Rp. 89 Juta</p>
          <p className="text-gray-500">Transaksi 7 Hari</p>
        </div>
        <div className="flex items-center gap-0">
          <p className="text-green-500 font-semibold text-sm">+ 12%</p>
          <img className="w-3 ml-1" src={up} alt="Arrow Up" />
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg"></div>
      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <p className="text-gray-500">7 Hari</p>
        <p className="text-blue-700 uppercase">Juni</p>
      </div>
    </div>
  )
}

export default TransactionSevenDaily
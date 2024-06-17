import { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function Cashout({ isOpen, onClose, id }) {
  const [formData, setFormData] = useState({
    image_payment: '',
    amount: '',
    bank_name: '',
    no_rekening: '',
    name: '',
  });

  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData({ ...formData, image_payment: selectedFile });
  };

  const accessToken = sessionStorage.getItem('access_token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('image_payment', file);
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/fundraising/${id}/distributions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        body: data
      });
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Data berhasil ditambahkan',
        });
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Failed to create fundraising: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto relative">
        <h2 className="text-zinc-900 pt-8 text-2xl font-bold mb-6 text-center">Salurkan Dana</h2>
        <div className="bg-sky-500 text-sm text-white py-4 px-8">
          <p>Pastikan rekening bank yang terhubung valid untuk memastikan dana donasi dapat digunakan sesuai kebutuhan amal yang dijalankan.</p>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label htmlFor="amount" className="block text-black font-bold">Jumlah Dana yang Disalurkan*</label>
              <input 
                type="number" 
                id="amount" 
                name="amount" 
                placeholder="Rp 3.900.000" 
                className="mt-1 w-full h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:text-end placeholder:font-semibold" 
                value={formData.amount || ''} 
                onChange={handleChange} 
              />
            </div>
            <div className="text-zinc-800/opacity-50 pt-1 text-xs font-normal">Minimum Rp. 20.000</div>
            <div className="mt-4">
              <h2 className="text-zinc-900 text-xl font-bold">Tujuan Penarikan</h2>
              <div className="mb-1">
                <label htmlFor="bank_name" className="block mt-3 text-black font-semibold">Bank*</label>
                <select 
                  id="bank_name" 
                  name="bank_name" 
                  className="border mt-1 h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  value={formData.bank_name || ''} 
                  onChange={handleChange}
                >
                  <option value="" disabled>-- Pilih Bank --</option>
                  <option value="bca">Bank Central Asia (BCA)</option>
                  <option value="bri">Bank Rakyat Indonesia (BRI)</option>
                  <option value="bni">Bank Negara Indonesia (BNI)</option>
                  <option value="mandiri">Bank Mandiri</option>
                  <option value="cimb">CIMB Niaga</option>
                  <option value="permata">Bank Permata</option>
                  <option value="danamon">Bank Danamon</option>
                  <option value="btn">Bank Tabungan Negara (BTN)</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="no_rekening" className="block text-black font-semibold">Nomor Rekening*</label>
                <input 
                  type="text" 
                  id="no_rekening" 
                  name="no_rekening" 
                  placeholder="" 
                  className="mt-1 w-full h-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                  value={formData.no_rekening || ''} 
                  onChange={handleChange} 
                />
              </div>
              <div className="mt-4">
                <label htmlFor="name" className="block text-black font-semibold">Nama Pemilik Rekening*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="" 
                  className="mt-1 w-full h-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                  value={formData.name || ''} 
                  onChange={handleChange} 
                />
              </div>
              <div className="mt-4">
                <p className="block text-black font-semibold">Bukti Transfer*</p>
                <div className="mt-1 flex flex-col sm:flex-row items-center">
                  <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                    Pilih File
                  </label>
                  <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1" id="file_name">{file ? file.name : 'Tidak ada file yang dipilih'}</span>
                  <input className="hidden" id="multiple_files" type="file" multiple onChange={handleFileChange} />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-8">
              <button type="button" className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2 mb-2 sm:mb-0 sm:mr-2" onClick={onClose}>Batal</button>
              <button type="submit" className="bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex text-white w-full px-4 py-2">Kirim Donasi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Cashout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Cashout;

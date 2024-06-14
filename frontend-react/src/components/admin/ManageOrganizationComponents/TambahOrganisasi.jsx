import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from 'sweetalert2';

function AddOrganisasi({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        avatar: '',
        name: '',
        description: '',
        website: '',
        start_date: '',
        instagram: '',
        no_rek: '',
    });

    const [file, setFile] = useState(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFormData({ ...formData, avatar: selectedFile });
    };

    if (!isOpen) return null;

    const accessToken = sessionStorage.getItem('access_token');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('avatar', file);
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            const response = await fetch('https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/organizations', {
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
                    text: 'data berhasil ditambahkan',
                });
                onClose();
            } else {
                const errorData = await response.json();
                alert(`Failed to create organization: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto">
                <h2 className="text-zinc-900 text-xl font-bold mb-6 text-center">Tambah Organisasi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid grid-rows-1 md:grid-rows-6 gap-4">
                                <div className="flex flex-col sm:flex-row items-center">
                                    <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                                        Pilih File
                                    </label>
                                    <span className="p-2 text-gray-900 font-semibold text-center border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1" id="file_name">{file ? file.name : 'Tidak ada file yang dipilih'}</span>
                                    <input
                                        className="hidden"
                                        id="multiple_files"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-normal">Nama Organisasi</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder="Masukkan Nama Organisasi" 
                                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                                        value={formData.name} 
                                        onChange={handleChange}/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="tanggalBergabung" className="block text-gray-700 text-sm font-normal mb-1">Tanggal bergabung</label>
                                    <input
                                        type="date"
                                        id="start_date"
                                        name="start_date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        value={formData.start_date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="website" className="block text-gray-700 text-sm font-normal">Website</label>
                                    <input 
                                        type="text" 
                                        id="website" 
                                        name="website" 
                                        placeholder="Website Organisasi" 
                                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                                        value={formData.website} 
                                        onChange={handleChange}/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="instagram" className="block text-gray-700 text-sm font-normal">Instagram</label>
                                    <input 
                                        type="text" 
                                        id="instagram" 
                                        name="instagram"
                                        placeholder="Kontak Organisasi" 
                                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                                        value={formData.instagram} 
                                        onChange={handleChange}/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="website" className="block text-gray-700 text-sm font-normal">No Rekening</label>
                                    <input 
                                        type="text" 
                                        id="no_rek"
                                        name="no_rek" 
                                        placeholder="No Rekening" 
                                        className="mt-1 h-12 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                                        value={formData.no_rek} 
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="deskripsiOrganisasi" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi Organisasi</label>
                                <textarea
                                    id="description" 
                                    name="description"    
                                    className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Deskripsi Organisasi"
                                    value={formData.description} 
                                    onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <button type="button" className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2 mb-2 sm:mb-0 sm:mr-2" onClick={onClose}>Batal</button>
                            <button type="submit" className="bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex text-white w-full px-4 py-2">Tambah</button>
                        </div>
                    </form>
                </div>
             </div>
    );
}

AddOrganisasi.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddOrganisasi;

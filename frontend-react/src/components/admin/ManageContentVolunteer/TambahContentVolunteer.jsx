import PropTypes from 'prop-types';
import { useState } from 'react';
import Swal from "sweetalert2";

function AddVolunteer({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        image_url: '',
        title: '',
        target_volunteer: '',
        registration_deadline:'',
        start_date: '',
        end_date: '',
        content_activity: '',
        organization_id: '',
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
        setFormData({ ...formData, image_url: selectedFile });
    };

    const accessToken = sessionStorage.getItem('access_token');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append('image_url', file);
            Object.keys(formData).forEach(key => {
                data.append(key, formData[key]);
            });

            const response = await fetch('https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/volunteers', {
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
                alert(`Failed to create fundraising: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

      
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto">
                <h2 className="text-zinc-900 text-xl font-bold mb-6 text-center">Tambah konten Volunteer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <div className="flex flex-col sm:flex-row items-center">
                            <label htmlFor="multiple_files" className="text-md w-full sm:w-28 text-white bg-sky-500 border border-gray-300 rounded-t-lg sm:rounded-e-none sm:rounded-l-lg cursor-pointer p-2 text-center">
                                Pilih File
                            </label>
                            <span className="p-2 text-gray-500 border border-gray-300 w-full rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:w-auto sm:mt-0 sm:flex-1" id="file_name">{file ? file.name : 'Tidak ada file yang dipilih'}</span>
                            <input
                                className="hidden"
                                id="multiple_files"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-normal">Judul</label>
                            <input type="text" id="title" name="title" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.title} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="linkWA" className="block text-gray-700 text-sm font-normal">Link Group WA</label>
                            <input type="text" id="linkWA" name="linkWA" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div className="flex flex-col">
                                <label htmlFor="target_volunteer" className="block text-gray-700 text-sm font-normal">Target Donasi</label>
                                <input type="number" id="target_volunteer" name="target_volunteer" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.target_volunteer} onChange={handleChange}/>
                        </div>
                        <div className="flex flex-col">
                                <label htmlFor="organization_id" className="block text-gray-700 text-sm font-normal">id organisasi</label>
                                <input type="text" id="organization_id" name="organization_id" placeholder="Type here" className="mt-1 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={formData.organization_id} onChange={handleChange}/>
                         </div>
                        <div className="grid grid-rows-1 md:grid-rows-3 gap-4">
                            <div className="flex flex-col">
                                    <label htmlFor="registration_deadline" className="block text-gray-700 text-sm font-normal mb-1">Deadline pendaftaran</label>
                                    <input
                                        type="date"
                                        id="registration_deadline"
                                        name="registration_deadline"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        value={formData.registration_deadline}
                                        onChange={handleChange}
                                    />
                            </div>
                            <div className="flex flex-col">
                                    <label htmlFor="start_date" className="block text-gray-700 text-sm font-normal mb-1">Tanggal mulai</label>
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
                                    <label htmlFor="end_date" className="block text-gray-700 text-sm font-normal mb-1">Tanggal selesai</label>
                                    <input
                                        type="date"
                                        id="end_date"
                                        name="end_date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        value={formData.end_date}
                                        onChange={handleChange}
                                    />
                                </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="content_activity" className="block text-gray-700 text-sm font-normal mb-1">Deskripsi</label>
                                <textarea
                                    id="content_activity"
                                    name='content_activity'
                                    rows={5}
                                    className="block p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Type here"
                                    value={formData.content_activity}
                                    onChange={handleChange}
                                />
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
    )
}

AddVolunteer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
  
export default AddVolunteer
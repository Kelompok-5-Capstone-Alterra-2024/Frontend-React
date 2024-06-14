import { useState } from 'react';
import hapus from "../../../../assets/images/Trash.svg";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function HapusUser({ isOpen, onClose, itemId}) {
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const accessToken = sessionStorage.getItem('access_token');
    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/users/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            });
            if (response.ok) {
                onClose();
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'data berhasil dihapus',
                });
                navigate('/admin/manage-user');
            } else {
                console.error('Failed to delete the item.');
            }
        } catch (error) {
            console.error('Error deleting the item:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto">
                <div className="flex grid-cols-2 mb-6">
                    <div className="flex-col">
                        <img src={hapus} alt="Trash icon" className="w-12 h-12 mr-4" />
                    </div>
                    <div className="grid-rows-2">
                        <h2 className="text-zinc-900 text-xl font-bold">Hapus Data Donasi</h2>
                        <p className="mb-6 mt-2">Apakah Anda yakin ingin menghapus data donasi ini? Tindakan ini tidak dapat dibatalkan.</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2"
                        onClick={onClose}
                        disabled={isDeleting}
                    >
                        Batalkan
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 rounded-lg justify-center items-center gap-2 inline-flex text-white px-4 py-2"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Menghapus...' : 'Hapus'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HapusUser;

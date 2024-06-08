import hapus from "../../../../assets/images/Trash.svg";

function HapusOrganisasi({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/5 max-h-screen overflow-y-auto">
                <div className="flex grid-cols-2 mb-6">
                    <div className="flex-col">
                        <img src={hapus} alt="Trash icon" className="w-12 h-12 mr-4" />
                    </div>
                    <div className="grid-rows-2">
                        <h2 className="text-zinc-900 text-xl font-bold">Hapus Data Organisasi</h2>
                        <p className="mb-6 mt-2">Apakah Anda yakin ingin data organisasi ini? Tindakan ini tidak dapat dibatalkan.</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-2">
                    <button 
                        type="button" 
                        className="bg-gray-100 rounded-lg border border-gray-100 text-gray-800 justify-center items-center gap-2 inline-flex px-4 py-2" 
                        onClick={onClose}
                    >
                        Batalkan
                    </button>
                    <button 
                        type="submit" 
                        className="bg-red-500 rounded-lg justify-center items-center gap-2 inline-flex text-white px-4 py-2"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HapusOrganisasi
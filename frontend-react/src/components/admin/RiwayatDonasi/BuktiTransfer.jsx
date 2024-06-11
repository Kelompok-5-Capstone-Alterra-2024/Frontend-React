function BuktiTransfer({ src, onClose }) {
  return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-5">
          <div className="relative max-w-full max-h-full p-6 bg-white rounded-2xl flex-col justify-start items-start gap-12 inline-flex">
              <div className="flex-col justify-start items-center gap-[29px] flex">
                  <div className="text-zinc-900 text-xl font-semibold">Bukti Transfer</div>
                  <div className="justify-start items-start gap-[19px] inline-flex">
                      {src ? (
                          <img className="p-2 max-w-full max-h-[80vh] object-contain" src={src} alt="Bukti Transfer" />
                      ) : (
                          <div className="p-2 text-gray-500 text-lg">Tidak ada data bukti transfer</div>
                      )}
                  </div>
              </div>
              <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-md px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
      </div>
  );
}

export default BuktiTransfer;

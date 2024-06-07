import { useState } from 'react';

function InputNominalDonasi({ onSubmit, onCancel }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = () => {
    if (donationAmount) {
      onSubmit(donationAmount);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
      <div className="w-96 h-[280px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-12">
        <div className="self-stretch h-[136px] flex-col justify-center items-center gap-[29px] flex">
          <div className="text-zinc-900 text-xl font-semibold">Input Nominal Donasi</div>
          <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
            <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
              <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Nominal Donasi</div>
              </div>
              <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                <input
                  type="text"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="masukkan nominal donasi"
                  className="grow shrink basis-0 h-5 text-gray-600 text-sm font-normal leading-tight rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-sky-500 placeholder-gray-400"
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-7">
          <div onClick={onCancel} className="h-12 px-14 py-3.5 bg-gray-100 rounded-lg border border-gray-100 justify-center items-center gap-2 flex cursor-pointer">
            <div className="text-gray-800 text-sm font-normal leading-tight">Batal</div>
          </div>
          <div onClick={handleSubmit} className="h-12 px-14 py-3.5 bg-sky-500 rounded-lg justify-center items-center gap-2 flex cursor-pointer">
            <div className="text-gray-50 text-sm font-semibold leading-tight">Oke</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputNominalDonasi;

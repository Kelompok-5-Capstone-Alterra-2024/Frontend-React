import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailTransaksi() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getDetailTransaksi();
  }, [id]);

  const accessToken = sessionStorage.getItem('access_token');
  const getDetailTransaksi = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/transactions/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    return <div className='min-h-screen bg-neutral-50 flex justify-center items-center'>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <h1 className="pl-5 pt-5 text-2xl text-black font-semibold">Transaksi / Detail riwayat transaksi</h1>
      <div className="flex flex-wrap gap-2 p-4">
        {/* Bagian kiri */}
        <div className="w-full md:w-auto max-w-md p-5">
          <img className="w-full h-auto" src={data.image_payment} alt="Transaction" />
        </div>
        {/* Bagian kanan */}
        <div className="w-full md:w-auto md:flex-1">
          <div className="p-4 bg-white rounded-2xl flex-col justify-end items-end gap-4">
            <div className="self-stretch h-[416px] flex-col justify-start items-start flex">
              <div className="self-stretch h-[416px] flex-col justify-start items-start flex">
                <div className="self-stretch h-[416px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-center text-zinc-800 text-2xl font-semibold leading-[30px]">Detail salurkan dana</div>
                  <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                    <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                      <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Jumlah dana yang disalurkan</div>
                    </div>
                    <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{data.amount}</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[294px] flex-col justify-start items-start gap-1 flex pt-2">
                    <div className="text-center text-zinc-800 text-2xl font-semibold leading-[30px]">Tujuan Salurkan</div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Bank</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{data.payment_method}</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Nomor rekening *</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{data.no_rekening}</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Nama pemilik rekening *</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{data.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTransaksi;

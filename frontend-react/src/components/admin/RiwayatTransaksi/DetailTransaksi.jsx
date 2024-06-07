import { useState } from 'react';
import gambar from "../../../assets/images/buktiTransfer.png"

// Contoh data transaksi dalam bentuk JSON
const exampleTransactionData = {
  image: gambar,
  detailSalurkanDana: {
    jumlahDana: 'Rp. 3.900.000',
  },
  tujuanSalurkan: {
    bank: 'BCA',
    nomorRekening: '19283971073297',
    namaPemilikRekening: 'Hendro S',
  },
};

function DetailTransaksi() {
  // State untuk menyimpan data transaksi
  const [transactionData, setTransactionData] = useState(exampleTransactionData);

  return (
    <div className="min-h-screen bg-neutral-50">
      <h1 className="pl-5 pt-5 text-2xl text-black font-semibold">Transaksi / Detail riwayat transaksi</h1>
      <div className="flex flex-wrap gap-2 p-4">
        {/* Bagian kiri */}
        <div className="w-full md:w-auto">
          <img className="w-full md:w-auto" src={transactionData.image} alt="Transaction" />
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
                      <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{transactionData.detailSalurkanDana.jumlahDana}</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[294px] flex-col justify-start items-start gap-1 flex pt-2">
                    <div className="text-center text-zinc-800 text-2xl font-semibold leading-[30px]">Tujuan Salurkan</div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Bank</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{transactionData.tujuanSalurkan.bank}</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Nomor rekening *</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{transactionData.tujuanSalurkan.nomorRekening}</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[84px] flex-col justify-start items-start flex">
                      <div className="self-stretch px-1 py-2 justify-between items-center inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-sm font-normal leading-tight">Nama pemilik rekening *</div>
                      </div>
                      <div className="self-stretch px-4 py-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-5 text-gray-500 text-sm font-normal leading-tight">{transactionData.tujuanSalurkan.namaPemilikRekening}</div>
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

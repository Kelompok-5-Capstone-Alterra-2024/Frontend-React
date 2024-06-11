import { useState } from 'react';
import down from '../../../assets/images/CaretCircleDown.png';
import up from '../../../assets/images/CaretCircleUp.png';
import ellipse3 from '../../../assets/images/ellipse3.svg';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Bagaimana Cara Mendaftar Di Peduli Pintar?',
      answer: [
        '1. Buka Aplikasi Peduli Pintar',
        '2. Pilih Daftar',
        '3. Isi seluruh formulir',
        '4. Klik button daftar'
      ],
    },
    {
      question: 'Bagaimana Melakukan Donasi Melalui Aplikasi ini?',
      answer: [
        '1. Pilih Menu Donasi',
        '2. Pilih Salah Satu Donasi yang Kamu Inginkan',
        '3. Klik Button Donasi Sekarang',
        '4. Lakukan Pembayaran'
      ]
    },
    {
      question: 'Bagaimana Mendaftarkan diri Menjadi Volunteer Melalui Aplikasi ini?',
      answer: [
        '1. Pilih Menu Volunteer',
        '2. Pilih Salah Satu Volunteer yang Diinginkan',
        '3. Isi Seluruh Formulir',
        '4. Bergabung ke Group'
      ]
    },
    {
      question: 'Bagaimana Membaca Artikel pada Aplikasi ini?',
      answer: [
        '1. Pilih Menu Artikel',
        '2. Pilih Salah Satu Artikel',
        '3. Muncul Detail Artikel',
        '4. Tuliskan Komentarmu (Opsional)'
      ]
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-white relative' id='faq'>
      <div className="max-w-6xl mx-auto pt-16 pb-52 px-5">
        <h1 className="text-4xl font-bold pb-10 text-black">Pertanyaan yang Sering Mereka Ajukan?</h1>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button 
              className="w-full text-left text-gray-700 font-semibold text-xl bg-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-600 flex justify-between items-center border border-sky-500" 
              onClick={() => toggle(index)}
            >
              {faq.question}
              <img className="w-6 h-6" src={openIndex === index ? up : down} alt="caret icon" />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 leading-10 bg-white border border-black rounded-md">
                {faq.answer.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <img
        src={ellipse3}
        className="w-56 h-80 absolute right-[-0px] bottom-0 z-0 transform scale-x-[-1]"
        alt="Ellipse 3"
      />
    </div>
  );
}

export default Faq;

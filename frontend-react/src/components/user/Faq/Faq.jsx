import { useState } from 'react';
import down from '../../../assets/images/CaretCircleDown.png';
import up from '../../../assets/images/CaretCircleUp.png';
import ellipse3 from '../../../assets/images/ellipse3.svg';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Bagaimana Cara Mendaftar Di Peduli Pintar?',
      answer: 'Anda dapat mendaftar di Peduli Pintar dengan mengunjungi situs web kami dan mengisi formulir pendaftaran.'
    },
    {
      question: 'Bagaimana Melakukan Donasi Melalui Aplikasi ini?',
      answer: 'Untuk melakukan donasi, buka aplikasi dan pilih menu Donasi. Ikuti petunjuk untuk menyelesaikan transaksi.'
    },
    {
      question: 'Bagaimana Mendaftarkan diri Menjadi Volunteer Melalui Aplikasi ini?',
      answer: 'Untuk menjadi volunteer, buka aplikasi dan pilih menu Volunteer. Isi formulir pendaftaran dan tunggu konfirmasi dari kami.'
    },
    {
      question: 'Bagaimana Membaca Artikel pada Aplikasi ini?',
      answer: 'Anda dapat membaca artikel dengan membuka menu Artikel di aplikasi dan memilih artikel yang ingin Anda baca.'
    },
    {
      question: 'Bagaimana Membaca Artikel pada Aplikasi ini?',
      answer: 'Anda dapat membaca artikel dengan membuka menu Artikel di aplikasi dan memilih artikel yang ingin Anda baca.'
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
        <div key={index} className="text-gray-600 font-semibold">
          <button 
            className="w-full text-left bg-white p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 flex justify-between items-center border border-gray-400" 
            onClick={() => toggle(index)}
          >
            {faq.question}
            <img className="w-6 h-6" src={openIndex === index ? up : down} alt="caret icon" />
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              {faq.answer}
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
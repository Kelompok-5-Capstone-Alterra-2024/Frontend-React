import Testimonial from '../Testimonial/Testimonial';
import siti from '../../../assets/images/siti.png';
import budi from '../../../assets/images/budi.png';
import dewi from '../../../assets/images/dewi.png';
import agus from '../../../assets/images/agus.png';
import ellipse3 from '../../../assets/images/ellipse3.svg';

function Testimonials() {
  // Assuming testimonial data is fetched from an API or stored somewhere
  const testimonialData = [
    {
      name: "Siti",
      position: "Pengguna",
      content: "Aplikasi ini sangat membantu! Donasi yang saya terima telah mengubah hidup banyak orang.",
      image: siti,
    },
    {
      name: "Budi",
      position: "Relawan",
      content: "Berkat Peduli Pintar, saya dapat menjadi relawan dan membantu lingkungan dengan lebih efektif.",
      image: budi,
    },
    {
      name: "Dewi",
      position: "Pembaca",
      content: "Artikel-artikel di sini sangat informatif dan memberikan wawasan baru tentang isu-isu sosial.",
      image: dewi,
    },
    {
      name: "Agus",
      position: "Pengguna",
      content: "Aplikasi ini sangat membantu! Donasi yang saya terima telah mengubah hidup banyak orang.",
      image: agus,
    },
  ];

  return (
    <div className="bg-white relative" id='testimonials'>
      <div className='p-8 md:p-16'>
      <h1 className="text-3xl font-bold text-black pb-2">Apa Kata Mereka?</h1>
      <p className="text-lg text-gray-600">Kami bangga bisa menjadi jembatan antara mereka yang ingin membantu dan yang membutuhkan.</p>
      <p className="text-lg text-gray-600">Berikut adalah beberapa kisah inspiratif dari pengguna aplikasi Peduli Pintar yang telah merasakan manfaatnya.</p>
      <p className="text-lg text-gray-600">Mari dengarkan suara mereka.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 pb-40 md:pb-48 lg:pb-64">
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
      <img
        src={ellipse3}
        className="w-56 h-80 absolute left-[-10px] bottom-0 origin-top-left z-0"
        alt="Ellipse 3"
      />
    </div>
  );
}

export default Testimonials;
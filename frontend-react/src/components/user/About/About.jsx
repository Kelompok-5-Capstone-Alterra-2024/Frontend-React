import about from '../../../assets/images/about.png';
import logo from '../../../assets/images/logo.png';
import check from '../../../assets/images/check.png';
import ellipse3 from '../../../assets/images/ellipse3.svg';

function About() {
  return (
    <div className='relative' id='about'>
    <div className="flex flex-wrap md:flex-nowrap bg-white p-5 lg:pb-16">
      {/* Bagian Kiri */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="relative w-full md:w-auto">
          <img src={about} alt="About Us" className="mb-4 w-full md:w-auto md:p-10" />
            <div className="absolute bottom-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Peduli Pintar"
                className="bg-white rounded-lg shadow-lg p-3"
                style={{ width: '71.42%'}}
              />
            </div>
        </div>
      </div>
      {/* Bagian Kanan */}
      <div className="w-full md:w-1/2 p-6">
        <p className="text-primary-main font-semibold text-xl pb-1 pt-5">Tentang Kami</p>
        <h2 className="text-5xl font-bold text-primary-subtle">Kami Membantu</h2>
        <h2 className="text-5xl font-bold text-primary-subtle mb-4">Anda dalam Bersosial</h2>
        <p className="text-gray-700 mb-6 text-xl">
          Kami berkomitmen untuk memberdayakan Anda dalam berbagi dan beraksi, melalui donasi yang transparan, mudah, dan aman serta kesempatan menjadi relawan yang berdampak nyata.
        </p>
        <div className="space-y-4 md:pt-10">
          <div className="flex items-start">
            <img src={check} alt="Check" className="w-12 h-12 mt-1 mr-4" />
            <p className="text-gray-700 text-xl">
              <span className="font-semibold">Transparansi:</span> Setiap donasi dan aksi sukarela dilacak dan dilaporkan dengan jelas.
            </p>
          </div>
          <div className="flex items-start">
            <img src={check} alt="Check" className="w-12 h-12 mt-1 mr-4" />
            <p className="text-gray-700 text-xl">
              <span className="font-semibold">Kemudahan:</span> Donasi dan pendaftaran relawan hanya dengan beberapa klik.
            </p>
          </div>
          <div className="flex items-start">
            <img src={check} alt="Check" className="w-12 h-12 mt-1 mr-4" />
            <p className="text-gray-700 text-xl">
              <span className="font-semibold">Keamanan:</span> Transaksi dan data pribadi Anda dilindungi oleh enkripsi mutakhir.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img
        src={ellipse3}
        className="w-56 h-56 absolute left-0 bottom-0 origin-bottom-left z-0"
        alt="Ellipse 3"
      />
    </div>
  );
}

export default About;
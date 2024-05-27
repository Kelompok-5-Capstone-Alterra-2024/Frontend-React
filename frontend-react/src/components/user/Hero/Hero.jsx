import ellipse3 from '../../../assets/images/ellipse3.svg';
import ellipse4 from '../../../assets/images/ellipse4.svg';
import hero from '../../../assets/images/hero.png';
import appstore from '../../../assets/images/appstore.png';
import playstore from '../../../assets/images/playstore.png';

function Hero() {
  return (
    <div className="relative bg-white min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row md:h-full flex-1">
        <div className="md:w-1/2 flex flex-col justify-center items-start p-10">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-neutral-700 text-4xl md:text-5xl font-extrabold leading-[50px] md:leading-[65px] tracking-wide">
                Bersama Kita Bisa
              </p>
              <p className="text-sky-500 text-4xl md:text-5xl font-extrabold leading-[50px] md:leading-[65px] tracking-wide">
                Membuat Perubahan
              </p>
            </div>
            <div className="text-neutral-700/80 text-xl md:text-2xl font-normal tracking-tight">
              Bergabunglah dengan Peduli Pintar untuk mendukung donasi, menjadi relawan, dan membaca artikel terkini tentang isu sosial dan lingkungan.
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-start items-end gap-8">
            <button className="h-14 px-4 bg-white rounded-full border border-sky-500 hover:border-sky-600 justify-center items-center gap-2 flex">
              <span className="text-cyan-500 text-xl font-bold leading-tight hover:text-sky-600">
                Unduh di App Store
              </span>
            </button>
            <button className="h-14 px-4 bg-sky-500 rounded-full justify-center items-center gap-2 flex hover:bg-sky-600">
              <span className="text-gray-50 text-xl font-bold leading-tight">
                Dapatkan di Google Play
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4 pt-6 md:pt-20 z-10">
            <img src={appstore} alt="App Store" />
            <img src={playstore} alt="Play Store" />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <img src={hero} alt="hero section" />
        </div>
      </div>
      <img
        src={ellipse3}
        className="w-56 h-80 absolute left-[-10px] bottom-[20px] origin-top-left z-0"
        alt="Ellipse 3"
      />
      <img
        src={ellipse4}
        className="w-96 h-52 absolute right-0 bottom-[20px] origin-top-left z-0"
        alt="Ellipse 4"
      />
    </div>
  )
}

export default Hero
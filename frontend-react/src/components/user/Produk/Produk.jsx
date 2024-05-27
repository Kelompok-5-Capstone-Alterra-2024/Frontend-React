import ellipse3 from '../../../assets/images/ellipse3.svg';
import ellipse5 from '../../../assets/images/ellipse5.svg';
import produk from '../../../assets/images/produk.png';
import donasi from '../../../assets/images/MagicWand.svg';
import volunteer from '../../../assets/images/FlyingSaucer.svg';
import artikel from '../../../assets/images/Confetti.svg';

function Produk() {
  return (
    <div className="relative p-10 bg-white min-h-screen flex flex-col items-center">
      <div className="mt-10 md:mt-20 text-neutral-800 text-5xl font-semibold tracking-wide text-center" id='produk'>
        Fitur Utama
      </div>
      <div className="mt-10 md:mt-20 pb-44 flex flex-col md:flex-row justify-center items-center gap-10 px-4 relative z-10">
        <div className="w-full md:w-1/2 max-w-lg relative">
          <img
            className="w-full h-auto rounded-2xl relative z-10"
            src={produk}
            alt="Placeholder"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="p-5 bg-red-500/20 rounded-xl flex items-center">
              <img src={donasi} alt="Donasi" />
            </div>
            <div>
              <div className="text-neutral-700 text-2xl font-semibold">Donasi</div>
              <div className="text-neutral-700 text-base font-normal">
                Sumbangkan dana Anda untuk berbagai kegiatan sosial yang berdampak besar. Setiap kontribusi Anda sangat berarti.
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-5 bg-emerald-600/20 rounded-xl flex items-center">
              <img src={volunteer} alt="Volunteer" />
            </div>
            <div>
              <div className="text-neutral-700 text-2xl font-semibold">Volunteer</div>
              <div className="text-neutral-700 text-base font-normal">
                Daftar jadi relawan dan ikut serta dalam berbagai aktivitas yang membantu masyarakat dan lingkungan sekitar.
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-5 bg-amber-200/20 rounded-xl flex items-center">
              <img src={artikel} alt="Artikel" />
            </div>
            <div>
              <div className="text-neutral-700 text-2xl font-semibold">Artikel</div>
              <div className="text-neutral-700 text-base font-normal">
                Baca artikel terbaru tentang isu-isu sosial dan lingkungan untuk menambah wawasan dan inspirasi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={ellipse3}
        className="w-56 h-56 absolute left-0 bottom-0 origin-bottom-left z-0"
        alt="Ellipse 3"
      />
      <img
        src={ellipse5}
        className="w-[100] h-[100] absolute origin-right right-0 bottom-[180px] z-0"
        alt="Ellipse 5"
      />
    </div>
  );
}

export default Produk;
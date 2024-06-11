import logo from '../../../assets/images/logo.png';
import facebook from '../../../assets/images/facebook.png';
import linkedin from '../../../assets/images/linkedin.png';
import twitter from '../../../assets/images/twitter.png';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className='bg-white'>
      <hr />
      <footer className="footer footer-center p-10 text-neutral-400">
        <img src={logo} className="h-8" alt="Peduli Pintar"/>
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="hover:text-sky-500 font-semibold cursor-pointer" smooth={true} duration={500}>Home</Link>
          <Link to="produk" className="hover:text-sky-500 font-semibold cursor-pointer" smooth={true} duration={500}>Fitur</Link>
          <Link to="testimonials" className="hover:text-sky-500 font-semibold cursor-pointer" smooth={true} duration={500}>Testimonial</Link>
          <Link to="faq" className="hover:text-sky-500 font-semibold cursor-pointer" smooth={true} duration={500}>FAQ</Link>
          <Link to="about" className="hover:text-sky-500 font-semibold cursor-pointer" smooth={true} duration={500}>About</Link>
        </nav> 
        <div className="grid grid-cols-2 pt-10 lg:gap-x-96">
          <div className="flex flex-row gap-3">
            <Link><img src={facebook} className="h-8 cursor-pointer" alt="facebook"/></Link>
            <Link><img src={linkedin} className="h-8 cursor-pointer" alt="linkedin"/></Link>
            <Link><img src={twitter} className="h-8 cursor-pointer" alt="twitter"/></Link>
          </div>
          <div>
            <p>© 2024 PeduliPintar. Seluruh Hak Dilindungi. </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
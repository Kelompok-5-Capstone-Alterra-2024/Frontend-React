import About from "../../../components/user/About/About"
import Faq from "../../../components/user/Faq/Faq"
import Hero from "../../../components/user/Hero/Hero"
import Produk from "../../../components/user/Produk/Produk"
import Testimonials from "../../../components/user/Testimonials/Testimonials"

function Home() {
  return (
    <div>
      <Hero/>
      <Produk/>
      <Testimonials/>
      <Faq/>
      <About/>
    </div>
  )
}

export default Home
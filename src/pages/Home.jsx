import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import SignatureDishes from '../components/SignatureDishes'
import Locations from '../components/Locations'
import Awards from '../components/Awards'
import Offers from '../components/Offers'
import LatestNews from '../components/LatestNews'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import BookingCTA from '../components/BookingCTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <SignatureDishes />
      <Locations />
      <Awards />
      <Offers />
      <LatestNews />
      <Reviews />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  )
}

export default Home
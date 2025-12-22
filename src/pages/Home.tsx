import Header from '../components/Header'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-[#0b1538] text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default Home


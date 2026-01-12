import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Events } from '@/components/Events'
import { About } from '@/components/About'
import { Menus } from '@/components/Menus'
import { Gallery } from '@/components/Gallery'
import { FindUs } from '@/components/FindUs'
import { ReservationCTA } from '@/components/ReservationCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Events />
      <About />
      <Menus />
      <Gallery />
      <FindUs />
      <ReservationCTA />
      <Footer />
    </main>
  )
}

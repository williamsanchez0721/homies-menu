import Navbar from './components/navbar/Navbar'

import Food from './home/Food'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Food />
      </main>
    <Footer />
    </>
  )
}

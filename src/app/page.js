import Header from './components/Header/page'
import Hero from './hero/page'
import AboutUs from './aboutUs/page'
import OurServices from './ourServices/page'
import HomeProducts from './homeProducts'
import Aromas from './aromas'
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <HomeProducts />
      <Aromas/>
    </>
  )
}

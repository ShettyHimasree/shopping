import React ,{useState}from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import {Gents, Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)

  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
  return (
      <div>
      <Header />
      <Banner />
      <Collections  gentsFashion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Footer />
    </div>
  )
}

export default MainPage

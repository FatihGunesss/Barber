import React from 'react'
import Hero from './hero'
import InfoBox from './infobox'
import Service from './home-service'
import Browse from './browse'
import Barber from './barber'
import Choose from './choose'
import Maps from './maps'

const Home = () => {
  return (
    <div>
      <Hero/>
      <InfoBox/>
      <Service/>
      <Browse/>
      <Barber/>
      <Choose/>
      <Maps/>
    </div>
  )
}

export default Home
import React from 'react'
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Adv from '../components/Adv';
import Items from '../components/Items';
import Deal from '../components/Deal';
import Testinomial from '../components/Testinomial';
import News from '../components/News';
import Pros from '../components/Pros';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Category />
      <Adv></Adv>
      <Items></Items>
      <Deal></Deal>
      <Testinomial></Testinomial>
      <News></News>
      <Pros></Pros>
      <Footer></Footer>
    </div>
  )
}

export default Home

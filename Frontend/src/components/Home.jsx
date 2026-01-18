import React from 'react'
import Slider from './Slider';
import Navbar from './Navbar';
import Category from './Category';
import Adv from './Adv';
import Items from './Items';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Category></Category>
      <Adv></Adv>
      <Items></Items>
    </div>
  )
}

export default Home

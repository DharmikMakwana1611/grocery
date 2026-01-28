import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Shop from '../components/Shop';

function Listing() {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Listing

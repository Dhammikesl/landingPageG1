import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import '../style/style.scss';
import Hero from './hero';
import Features from './features';
import Benefits from './benefits';
import GetInTouch from './getIn';
import ScrlTop from '../component/ScrlTop';
import SEO from '../component/SEO';
import ChoosePlan from './plan';

const index = () => {
  return (
    <>
      <div className='container-fluid wrap-content'>
        <SEO
          title="NDISpensable: Revolutionise Your Operations Efficiency"
          description="Elevate Your NDIS Operations - Personalized Cloud Solution for Enhanced Efficiency."
          image="../images/logo.png"
        />
        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <ChoosePlan />
        <GetInTouch />

      </div>
      <Footer />
      <ScrlTop />
    </>

  )
}

export default index

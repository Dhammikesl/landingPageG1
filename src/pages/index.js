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
import Testimonial from './testimo';

const index = () => {
  return (
    <>
      <div className='container-fluid wrap-content'>
        <SEO
          title="Landing Page Gatsby/ React"
          description="Landing Page Gatsby/ React: RMDP Rathnayaka 2023."
          image="../images/logo.png"
        />
        <Navbar />
        <Hero />
        <Features />
        <Benefits />
        <Testimonial />
        <ChoosePlan />
        <GetInTouch />

      </div>
      <Footer />
      <ScrlTop />
    </>

  )
}

export default index

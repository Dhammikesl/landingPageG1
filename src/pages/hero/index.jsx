import React from 'react'
import heroImage from '../../images/hero.png';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';




const Hero = () => {
    //     const data = useStaticQuery(graphql`
    //     query {
    //         heroImage: file(relativePath: { eq: "hero.png" }) {
    //         childImageSharp {
    //             fluid(maxWidth: 800, quality: 100) {
    //             ...GatsbyImageSharpFluid
    //         }
    //     }
    //     }
    //     }
    // `);
    return (
        <div className='row p-0 m-0'>
            <div className='col p-0 m-0'>
                <div className='hero section-padding section-padding-hero' id='home'>
                    <div className='hero-content'>
                        <div className='title-1'>
                        Elevate Your Style with <span className='txt-ndis'>siteName</span> Unleash Fashion Freedom Now! </div>

                        <div className='title-2 mt-10'>
                            <div className='mt-1 mb-3'>
                                <div>
                                    <span>Elevate Your Operations: </span>
                                </div>
                                <div>
                                    <span>Personalized Cloud Solution for Enhanced Efficiency</span>
                                </div>

                            </div>
                        </div>
                        <div className='hero-input mt-3'>
                            <a href="#get-in-touch-plc" variant='primary' className='btn btn-primary'>Start Your Transformation</a>
                        </div>
                    </div>



                    <div className='hero-image'>
                        <img src={heroImage} alt="hero" />
                        {/* <Img className="hero-img"
                            fluid={data.heroImage.childImageSharp.fluid}
                            alt="Hero" loading="eager"
                            fadeIn={true} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero
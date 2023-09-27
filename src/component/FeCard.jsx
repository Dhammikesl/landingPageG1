import React from 'react'
import propTypes from "prop-types";

const FeCard = ({ src, alt, title, even = false, description }) => {
    if (even) {
        return (
            <div className='row crd-features even'>
                <div className='col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2'>
                    <div className='img-wrapper left-img'>
                        <img src={src} alt={alt} />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1'>
                    <div className='content'>
                        <div className='title-4'>{title}</div>
                        <ul>
                            <li>
                                <span className='txt'> {description}</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className='row crd-features'>
            <div className='col-lg-6 col-md-12 col-12'>
                <div className='content'>
                    <div className='title-4'>{title}</div>
                    <ul>
                        <li>
                            <span className='txt'> {description}</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='col-lg-6 col-md-12 col-12'>
                <div className='img-wrapper right-img'>
                    <img src={src} alt={alt} width="400px" />
                </div>
            </div>
        </div>
    )
}

FeCard.propTypes = {
    even: propTypes.bool
};
export default FeCard



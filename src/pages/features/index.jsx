import React from 'react';
import FeCard from '../../component/FeCard';
import { features } from '../../component/featuresList';

const Features = () => {
    return (
        <div className='row p-0 m-0'>
            <div className='col p-0 m-0'>
                <div className='section-padding' id='features'>
                    <div className='text-center'>
                        <div className='title-3 text-center'>FEATURES</div>
                        <div className='sub-title-1 mb-4'>Explore Our Exciting New Product Features</div>
                        <div className='sub-title-2'>Discover the latest enhancements designed to elevate your experience and streamline your workflow effortlessly.</div>
                    </div>
                    <div className='crd-set'>
                        <FeCard src={features.feature1.src} alt={features.feature1.alt} title={features.feature1.title} description={features.feature1.description} />
                        <FeCard even={true} src={features.feature2.src} alt={features.feature2.alt} title={features.feature2.title} description={features.feature2.description} />
                        <FeCard src={features.feature3.src} alt={features.feature3.alt} title={features.feature3.title} description={features.feature3.description} />
                        <FeCard even={true} src={features.feature4.src} alt={features.feature4.alt} title={features.feature4.title} description={features.feature4.description} />
                        <FeCard src={features.feature5.src} alt={features.feature5.alt} title={features.feature5.title} description={features.feature5.description} />
                        <FeCard even={true} src={features.feature6.src} alt={features.feature6.alt} title={features.feature6.title} description={features.feature6.description} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features

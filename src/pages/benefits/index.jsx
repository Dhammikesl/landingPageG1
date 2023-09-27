import React from 'react';
import { benefitsArray } from '../../component/benefitsList';


const Benefit = () => {
    return (
        <>
            <div className='row wrap-benefits p-0 m-0'>
                <div className='col-12 p-0 m-0'>
                    <div className='section-padding' id='benefits'>
                        <div className='text-center'>
                            <div className='title-3 text-center'>BENEFITS</div>
                            <div className='sub-title-1 mb-4'>Discover the Many Rewards <span className='txt-ndis'>sitename</span> Offer </div>
                            <div className='sub-title-2'>Experience Unmatched Efficiency and Excellence in Service Provision</div>
                        </div>
                        <div className='content'>
                            <div className='row'>
                                {benefitsArray.map((benefit, id) => (
                                    <div className='col-12 col-lg-6 col-md-12' key={id}>
                                        <div className='wrap-data'>
                                            <div className='title-5'>{benefit.title}</div>
                                            <ul>
                                                {benefit.list.map((item) => (
                                                    <span className='txt'>   <li key={item.id}>{item.text}</li></span>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Benefit;

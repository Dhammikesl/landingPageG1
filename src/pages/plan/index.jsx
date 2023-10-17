import React from 'react'
import CrdPlan from '../../component/crdPlan'


const cardValues = {
    standard: {
        value: '29',
        type: 'Standard',
        desc: 'Standard Card Description',
        list: [
            'Lorem ipsum dolor sit amet',
            'consectetur adipiscing elit.',
            'Sed in fermentum ligula.',
        ],
    },

    essentials: {
        value: '109',
        type: 'Essentials',
        desc: 'Essentials Card Description',
        list: [
            'Lorem ipsum dolor sit amet',
            'consectetur adipiscing elit.',
            'Sed in fermentum ligula.',
        ],
    },

    premium: {
        value: '300',
        type: 'Premium',
        desc: 'Premium Card Description',
        list: [
            'Lorem ipsum dolor sit amet',
            'consectetur adipiscing elit.',
            'Sed in fermentum ligula.',
        ],
    }
};




const ChoosePlan = () => {

    return (
        <div className='row p-0 m-0'>
            <div className='col p-0 m-0'>
                <div className='section-padding' id='choose-plan'>
                    <div className='text-center'>
                        <div className='title-3 text-center'>Pricing Table</div>
                        <div className='sub-title-1 mb-4'>Choose the Plan That Rights For You</div>
                        <div className='sub-title-2'>Discover the latest enhancements designed to elevate your experience and streamline your workflow effortlessly.</div>
                    </div>
                    <div className='content'>
                        <div className='crd-set-plan'>
                            <CrdPlan {...cardValues.standard} />
                            <CrdPlan {...cardValues.essentials} />
                            <CrdPlan {...cardValues.premium}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosePlan

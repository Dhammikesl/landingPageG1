import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardBody } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import client1 from '../../images/c1.png';
import client2 from '../../images/c2.png';

const Testimonial = () => {


    const carouselCards = [
        {
            src: client1,
            alt: 'imgAlt ',
            star: <BsFillStarFill />,
            title: 'testimonials 1',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
            cname: 'John Doe',
            designation: 'CEO',
            company: 'Company Name',
            id: 1
        },
        {

            src: client2,
            alt: 'imgAlt ',
            star: <BsFillStarFill />,
            title: 'testimonials 2',
            description: 'Donec quam felis, ultricies nec,, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
            cname: 'Rob L',
            designation: 'CEO',
            company: 'Company Name',
            id: 2

        }
    ]


    return (

        <div className='row p-0 m-0'>
            <div className='col p-0 m-0'>
                <div className='section-padding' id='testimonials'>
                    <div className='text-center'>
                        <div className='title-3 text-center'>TESTIMONIALS</div>
                        <div className='sub-title-1 mb-4'>Give Our Users a Grate Experience</div>
                        <div className='sub-title-2'>Hear from Happy Customers About Their Achievements.</div>
                    </div>
                    <div className='content wrap-carousel'>
                        <Card>
                            <CardBody>
                                <Carousel>
                                    {carouselCards.map(card => (
                                        <Carousel.Item key={card.id}>
                                            <div className='c-inside'>
                                                <div className='img'><img className='pic' src={card.src} alt={card.alt} /></div>
                                                <div className='detail'>
                                                    <div className='star'>{card.star}{card.star}{card.star}{card.star}{card.star}</div>
                                                    <div className='title-4'>{card.title}</div>
                                                    <div className='desc'>{card.description}</div>
                                                    <div className='client-name'>{card.cname}</div>
                                                    <div className='designation'>{card.designation}</div>
                                                    <div className='org'>{card.company}</div>
                                                </div>
                                            </div>

                                        </Carousel.Item>)

                                    )}
                                </Carousel>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
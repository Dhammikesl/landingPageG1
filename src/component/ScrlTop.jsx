import React, { useState, useEffect } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

function ScrlTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <span>
            <BsFillArrowUpSquareFill className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop} />
        </span>
    );
}

export default ScrlTop;

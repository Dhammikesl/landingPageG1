import React, { useState } from 'react'



const CrdPlan = ({ value, type, desc, list }) => {

    const [isSelected, setIsSelected] = useState(false);

    const toggleSelected = () => {
        setIsSelected(!isSelected);
    };

    const selectedClass = isSelected ? 'selected' : '';



    return (
        <div className={`card card-plan ${selectedClass}`}>
            <div className='card-body'>
                <div className='title-2'>${value}</div>
                <div className='title-3 mb-0'>{type}</div>
                <div className='descript'>{desc}</div>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className='wrap-btn'>
                    <button onClick={toggleSelected} className='w-100 btn btn-accent-outline'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default CrdPlan

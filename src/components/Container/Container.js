import React, { useEffect, useState } from 'react';
import Laptop from '../Laptops/Laptop';
import LuckyDraw from '../LuckyDraw/LuckyDraw';
import './Container.css'


const Container = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    return (
        <div className="main-container">
            <div className='laptops-container'>
                {
                    laptops.map(laptop =>
                        <Laptop laptops={laptop} key={laptop.id}></Laptop>
                    )
                }
            </div>
            <div className="lucky-draw">
                <LuckyDraw></LuckyDraw>
            </div>
        </div>
    );
};

export default Container;
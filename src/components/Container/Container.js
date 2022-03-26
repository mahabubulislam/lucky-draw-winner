import React, { useEffect, useState } from 'react';
import './Container.css'
import Laptop from '../Laptops/Laptop';
import LuckyDraw from '../LuckyDraw/LuckyDraw';


const Container = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    return (
        <div className="container main-container">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
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
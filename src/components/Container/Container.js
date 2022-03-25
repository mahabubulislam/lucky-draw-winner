import React, { useEffect, useState } from 'react';
import Laptop from '../Laptops/Laptop';


const Container = () => {
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
 
    return (
        <div>
            {
                laptops.map(laptop=>
                    <Laptop laptops={laptop} key={laptop.id}></Laptop>   
                    )
            }
        </div>
    );
};

export default Container;
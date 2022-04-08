import React, { useEffect, useState } from 'react';
import './Container.css'
import Laptop from '../Laptops/Laptop';
import LuckyDraw from '../LuckyDraw/LuckyDraw';



const Container = () => {
    const [laptops, setLaptops] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    const handleSelectLaptop = (laptop) => {

        let newCart = []
        const exists = cart.find(product => product.id === laptop.id);
        if (!exists) {
            newCart = [...cart, laptop];
            setCart(newCart)
        }
        if (exists) {
            alert("Already added")
        }
        if (newCart.length > 4) {
            alert("You can't add more than 4")
            setCart(cart)
        }


    }



    const luckyLaptop = () => {
        const luckyOne = cart[Math.floor(Math.random() * cart.length)];
        return luckyOne
    }

    const clearLaptop = () => {
        setCart([])
    }
    return (
        <div className="container main-container">

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    laptops.map(laptop =>
                        <Laptop
                            laptops={laptop}
                            key={laptop.id}
                            handleSelectLaptop={handleSelectLaptop}
                        ></Laptop>
                    )
                }
            </div>
            <div className="lucky-draw ">
                <LuckyDraw
                    cart={cart}
                    clearLaptop={clearLaptop}
                    luckyLaptop={luckyLaptop}
                ></LuckyDraw>
            </div>
        </div>
    );
};

export default Container;
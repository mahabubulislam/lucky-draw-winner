import React from 'react';
import './LuckyDraw.css'
const LuckyDraw = ({cart}) => {
    console.log(cart)
    return (
        <div className='draw'>
            <div className="card border-0 shadow" style={{ width: "18rem" }}>
                <h3 className='text-center mt-3'>Selected Laptops: {cart.length}</h3>
                <button className='btn btn-outline-info my-3 w-75 mx-auto'>Choose 1 for me</button>
                <button className='btn btn-outline-primary mb-3 w-75 mx-auto'>Choose again</button>

            </div>
        </div>
    );
};

export default LuckyDraw;
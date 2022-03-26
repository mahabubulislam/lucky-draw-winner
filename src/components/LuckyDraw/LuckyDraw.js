import React from 'react';
import Lucky from '../LuckyLaptop/Lucky';
import './LuckyDraw.css'
const LuckyDraw = ({ cart, luckyLaptop, clearLaptop }) => {

    return (
        <div className='draw'>
            <div className="card border-0 shadow p-3" style={{ width: "18rem" }}>
                <h3 className='text-center mt-3'>Selected Laptops: {cart.length}</h3>
                {
                    cart?.map(laptop =>
                        <div className='d-flex align-items-center my-2' key={laptop.id}>
                            <img className='w-25 rounded-circle' src={laptop.picture} alt="" />
                            <p className='ms-2'>{laptop.name} </p>
                        </div>)
                }
                <Lucky onClick={() => luckyLaptop() } cart={cart}></Lucky>

                <button onClick={() => clearLaptop()} className='btn btn-outline-primary mb-3 w-75 mx-auto text-uppercase'>Choose again</button>

            </div>
        </div>
    );
};

export default LuckyDraw;
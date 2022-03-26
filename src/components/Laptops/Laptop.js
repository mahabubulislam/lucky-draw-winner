import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Laptop.css'
const Laptop = ({ laptops }) => {
    const { picture, name, price } = laptops
    return (

        <div className="col">
            <div className="card h-100">
                <img className='card-img-top ' src={picture} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <button className="btn btn-outline-success w-100">Select Laptop <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>

    );
};

export default Laptop;
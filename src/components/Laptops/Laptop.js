import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Laptop.css'
const Laptop = ({ laptops,  handleSelectLaptop }) => {
    const { picture, name, price } = laptops

    return (

        <div className="col">
            <div className="card h-100" data-aos="fade-up-right">
                <img className='card-img-top ' src={picture} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">Price: ${price}</h6>
                </div>
                <div className='d-flex align-items-center'>
                    <button onClick={()=> handleSelectLaptop(laptops)} className="btn btn-outline-success w-100">Select Laptop <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>

    );
};

export default Laptop;
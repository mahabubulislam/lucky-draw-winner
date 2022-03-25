import React from 'react';

const Laptop = ({laptops}) => {
    const {picture , name , price} =laptops
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
        </div>
    );
};

export default Laptop;
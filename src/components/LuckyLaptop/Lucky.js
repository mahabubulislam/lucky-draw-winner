import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
const Lucky = ({cart}) => {
    const luckyOne = cart[Math.floor(Math.random() * cart.length)];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className=" my-3 w-75 mx-auto text-uppercase" onClick={handleShow}>
                Choose 1 for me
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hurrah!!! You won this...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{luckyOne?.name}</h3>
                    <img className='w-50' src={luckyOne?.picture} alt="" />
                    <h3 >Price: ${luckyOne?.price}</h3>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default Lucky;
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name,img,details,key}=props.service
    return (
        <div className="service-container">
            <Container>            
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p> {details}  </p>
                <Link to={`/services/${key}`}>
                <Button variant="outline-primary">Details</Button>{' '}
                </Link>                    
            </Container>
        </div>
    );
};

export default Service;
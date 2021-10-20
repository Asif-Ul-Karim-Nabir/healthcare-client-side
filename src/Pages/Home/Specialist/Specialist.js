import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Specialist = (props) => {
    const {name,img,details,key}=props.specialist
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

export default Specialist;
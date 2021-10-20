import React from 'react';
import { Container } from 'react-bootstrap';

const Specialist = (props) => {
    const {name,img,details}=props.specialist
    return (
        <div className="service-container">
            <Container>            
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p> {details}  </p>
            </Container>
        </div>
    );
};

export default Specialist;
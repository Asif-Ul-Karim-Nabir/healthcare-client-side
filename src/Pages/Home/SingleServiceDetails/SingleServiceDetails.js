import React from 'react';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const SingleServiceDetails = (props) => {
    const {name,img,details,key}=props.service
    return (
        <div className="service-container">
            <Container>  
                <h3>Id : {key}</h3>          
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p> {details}  </p>
                {/* <Link to={`/services/${key}`}>
                <Button variant="outline-primary">Details</Button>{' '}
                </Link>                     */}
            </Container>
        </div>
    );
};

export default SingleServiceDetails;
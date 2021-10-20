import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [ services, setServices] = useState([]);
    useEffect( () => {
        fetch('/services.json')
        .then( res => res.json())
        .then( data => setServices(data))
    },[])
    return (
        <div>
            <h3 className="text-primary my-4">Our Services</h3> 
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto">         
            {
                services?.map(service => <Service
                key={service.key}
                service={service}
                >
                </Service>)
            }
            </Row>
        </div>
    );
};

export default Services;
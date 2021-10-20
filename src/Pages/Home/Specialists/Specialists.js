import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Specialist from '../Specialist/Specialist';

const Specialists = () => {
    const [ specialists, setSpecialists] = useState([]);
    useEffect( () => {
        fetch('/specialists.json')
        .then( res => res.json())
        .then( data => setSpecialists(data))
    },[])
    return (
        <div>
           <h3 className="text-primary my-4">Our Specialists</h3> 
            <Row xs={1} md={2} lg={2} className="g-4 mx-auto">         
            {
                specialists?.map(specialist => <Specialist
                key={specialist.key}
                specialist={specialist}
                >
                </Specialist>)
            }
            </Row>
        </div>
    );
};

export default Specialists;
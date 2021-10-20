import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
// import Service from '../Service/Service';
import SingleServiceDetails from '../SingleServiceDetails/SingleServiceDetails';
// import Single from './single';


const SingleService = ( ) => {
    const {key} = useParams()
    const [servicesDetails, setServicesDetails] = useState([]);
    // const [singleService, setSingleService] =useState({})
   
    useEffect( ()=>{
        fetch('/servicesDetails.json')
        .then(res=>res.json())
        .then(data=>setServicesDetails(data.services))
    },[])
    useEffect(()=>{
        const foundSingleService = servicesDetails.find(services=>services.key === key)
        // setSingleService(foundSingleService)
        console.log(foundSingleService)      
    },[servicesDetails])

    return (
        <div className="mt-5">
            <h3 className="pt-4">Id: {key}</h3>
            {/* <h3>name:{singleService?.displayName}</h3> */}
            {/* <h3 className="text-primary my-4">Our Services</h3> 
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto">         
            {
                servicesDetails?.map(service => <SingleServiceDetails
                key={service.key}
                service={service}
                >
                </SingleServiceDetails>)
            }
            </Row> */}
        </div>
    );
};

export default SingleService;
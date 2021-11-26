import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = ( ) => {
    const {key} = useParams()
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] =useState({})
   
    useEffect( ()=>{
        fetch('/servicesDetails.json')
        .then(res=>res.json())
        .then(data=>setServicesDetails(data.services))
    },[])
    useEffect(()=>{
        const foundService = servicesDetails.find(services=>services.key === key)
        setSingleService(foundService)     
    },[servicesDetails])

    return (
        <div className=" w-50 mx-auto">
            <h3 className="pt-2">{singleService?.name}</h3>
            <Card>
            <img src={singleService?.img} alt="" />
            <h2>Department: {singleService?.name}</h2>
            <p>{singleService?.details}</p>
            </Card>
           
        </div>
    );
};

export default SingleService;
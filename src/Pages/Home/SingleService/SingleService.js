import React, { useEffect, useState } from 'react';
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
        const foundSingleService = servicesDetails.find(services=>services.key === key)
        setSingleService(foundSingleService)
        console.log(foundSingleService)      
    },[servicesDetails])
    // useEffect(()=>{
    //     const foundSingleService = servicesDetails.find(servicesDetail=>servicesDetail.key === key ? setSingleService(foundSingleService) : )    
    // },[servicesDetails])
    return (
        <div className="mt-5">
            <h3 className="pt-4">Id: {key}</h3>
            <h3>name:{singleService?.key}</h3>
        </div>
    );
};

export default SingleService;
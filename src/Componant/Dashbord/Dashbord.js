import React, { useState } from 'react';
import { useEffect } from 'react';

const Dashbord = () => {
    const [data,setdata] =useState()
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>this is Dashbord</h1>
        </div>
    );
};

export default Dashbord;
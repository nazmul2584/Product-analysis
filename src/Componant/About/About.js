import React, { useEffect, useState } from 'react';

const About = () => {
    const [product,setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div>
            <h1>about page  {product.length} </h1>
        </div>
    );
};

export default About;
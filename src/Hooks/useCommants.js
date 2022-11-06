import React, { useEffect, useState } from 'react';

const About = () => {
    const [product,setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return [product,setproducts];
};

export default About;
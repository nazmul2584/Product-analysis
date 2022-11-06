import React, { useState } from 'react';
import About from '../../Hooks/useCommants';
import Reviewcart from '../Reviewcart/Reviewcart';


const Review = () => {
    const [product,setproducts] =About();
    return (
        <div>
            <h1>this is review {product.length} </h1>
           {
            product.map(product=><Reviewcart
                 key= {product.id} 
                 product = {product}
                 
                 ></Reviewcart>)
            
           }
           
        </div>
    );
};

export default Review;
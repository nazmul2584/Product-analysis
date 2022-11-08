import React, { useState } from 'react';
import About from '../../Hooks/useCommants';
import Reviewcart from '../Reviewcart/Reviewcart';


const Review = () => {
    const [product,setproducts] =About();
    
    return (
        <div className='grid grid-cols-4 gap-4 text-left mt-6'>
           
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
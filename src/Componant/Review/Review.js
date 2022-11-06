import React, { useState } from 'react';
import About from '../../Hooks/useCommants';


const Review = () => {
    const [product,setproducts] =About();
    return (
        <div>
            <h1>this is review {product.length} </h1>
        </div>
    );
};

export default Review;
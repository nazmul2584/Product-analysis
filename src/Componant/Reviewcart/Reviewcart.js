import React from 'react';

const Reviewcart = (props) => {
    const {name,username} = props.product;
    console.log(props)
    return (
        <div className='mt-4 border border-solid border-2 border-indigo-600 py-5 ml-6 pl-4 mr-5'>
             <h1><span className='mr-2'>Name:</span>{username} </h1>
             <h1><span className='mr-2'>Review:</span>{name} </h1>
           
        </div>
    );
};

export default Reviewcart;
import React from 'react';

const Reviewcart = (props) => {
    const {name} = props.product;
    console.log(props)
    return (
        <div className='mt-4 border border-solid border-2 border-indigo-600 py-5 ml-6 pl-4'>
            <h1> {name} </h1>
        </div>
    );
};

export default Reviewcart;
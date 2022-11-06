import React from 'react';

const Country = (props) => {
    const {common} = props.product.name;
    console.log(props)
    return (
        <div>
           name: {common}
        </div>
    );
};

export default Country;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import About from '../../Hooks/useCommants';
import img from '../../img/laptop.jpg'
import Reviewcart from '../Reviewcart/Reviewcart';
const Home = () => {

    const [product,setproducts] =About();
    const navigate = useNavigate();
    const seeallreview = () =>{
        navigate('/Review');
    }

    return (
        <div>
                <div className='flex border border'>
                    <div className='txt-container flex-1 w-1/2 text-5xl mt-9'>
                        
                        <h1 className='mb-5  text-orange-600 font-semibold'>YOUR NEXT LAPTOP</h1>
                        <h1 className='mb-5'>YOUR BEST  LAPTOP</h1>
                        <p className='text-2xl text-left ml-4 text-justify mr-4 mb-3'>For all types of working
                         styles, Dell has introduced their monitor which can make your work life 
                         much easier. This monitor comes with huge screen size ranges is more than ca
                         pable of providing you with HD resolution to Ultra HD resolution. With slim and ergonomically pleasing-looking, you will also be able to position these monitors in the way of your choice and can enjoy your way of working. Smart Technologies have bought a huge collecti
                        on of these Dell monitors for their all type of users within a reasonable price range</p>
                    </div>
                    <div className='text-container flex-1 w-1/2 mr-10 mt-9'>
                        
                        <img src= {img} alt="" />
                    </div>
                    
                </div>
                     <div className='mt-6'>
                        <h1 className='text-green-500'> CUSTOMER REVIEW {product.length} </h1>
                        <div className='grid grid-cols-4 gap-4 text-left mt-6 mr-5'>
           
           {
            product.map(product=><Reviewcart
                 key= {product.id} 
                 product = {product}
                
                 
                 ></Reviewcart>)
            
           }
           
        </div>
                        <div className='mt-24'>
                           
                            <button onClick={seeallreview} className='bg-rose-400 px-24 py-3 text-white rounded'>see all review</button>
                           
                        </div>
                    </div>
        </div>
    );
};

export default Home;
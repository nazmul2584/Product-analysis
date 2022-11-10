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
                        
                        <h1 className='mb-5  text-orange-600 font-semibold'>YOER NEXT LAPTOP</h1>
                        <h1 className='mb-5'>YOER BEST  LAPTOP</h1>
                        <p className='text-2xl text-left ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde eveniet quidem cupiditate officia numquam obcaecati eos, placeat consequatur quisquam incidunt assumenda iusto magni. Hic commodi possimus corrupti nobis officiis?</p>
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
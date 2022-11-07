import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/laptop.jpg'
const Home = () => {
    return (
        <div>
                <div className='flex'>
                    <div className='txt-container flex-1 w-1/2 text-5xl mt-9'>
                        
                        <h1 className='mb-5  text-orange-600 font-semibold'>YOER NEXT LAPTOP</h1>
                        <h1 className='mb-5'>YOER BEST  LAPTOP</h1>
                        <p className='text-2xl text-left ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde eveniet quidem cupiditate officia numquam obcaecati eos, placeat consequatur quisquam incidunt assumenda iusto magni. Hic commodi possimus corrupti nobis officiis?</p>
                    </div>
                    <div className='text-container flex-1 w-1/2 mr-10 mt-9'>
                        
                        <img src= {img} alt="" />
                    </div>
                    
                </div>
                     <div className='mt-2'>
                        <h1> CUSTOMER REVIEW</h1>
                        <div className='mt-24'>
                           <Link to= '/Review'>
                            <button className='bg-rose-400 px-24 py-3 text-white rounded'>see all review</button>
                           </Link>
                        </div>
                    </div>
        </div>
    );
};

export default Home;
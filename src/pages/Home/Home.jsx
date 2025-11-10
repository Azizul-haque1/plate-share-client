import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import userAxios from '../../hooks/userAxios';

const Home = () => {
    const axiosInstance = userAxios()
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axiosInstance('/foods')
            .then(data => {
                console.log(data.data)
                setFoods(data.data)
            }
            )


    }, [axiosInstance, setFoods])

    return (
        <div className='w-10/12 mx-auto'>
            <div className=" relative h-[700px]">
                <img
                    className='h-full object-cover w-full'
                    src="https://i.ibb.co.com/8nZKs2sc/istockphoto-1457889029-612x612.jpg" alt="" />
                <p className=' absolute top-1/2 text-center left-1/2 w-8/12 mx-auto bg-black/20 text-white text-4xl z-10 py-5 px-20 transform  -translate-y-1/2 -translate-x-1/2   '>One plate. One neighbor. One community.”</p>
            </div>
            <h1 className='text-center mt-10 mb-4 text-5xl font-bold text-secondary' >Featured Foods</h1>
            <div className="border-primary/50 border-t  border-2 w-2/12 mx-auto"></div>
            <p className='text-xl text-center my-5 text-secondary/80  '>Nourish your community, one plate at a time, by sharing the bounty.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-4">

                {
                    foods.map(food => <FoodCard food={food} />)
                }




            </div>

        </div>
    );
};

export default Home;
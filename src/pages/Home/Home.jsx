import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import useAxios from '../../hooks/userAxios';
import { Link } from 'react-router';


const Home = () => {
    const axiosInstance = useAxios()
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axiosInstance('/featured-foods')
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
            <h1 className='text-center mt-10 mb-4 text-5xl font-bold text-secondary' >Featured <span className='text-primary'>Foods</span></h1>

            <p className='text-xl text-center my-5 text-secondary/80  '>Nourish your community, one plate at a time, by sharing the bounty.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-4">

                {
                    foods.map(food => <FoodCard food={food} />)
                }




            </div>

            <div className=" text-center flex justify-center my-10 items-center">
                <Link to='/available-foods' className='btn btn-primary'>Show All</Link>
            </div>

            <h1 className='text-5xl text-secondary font-bold text-center my-20'>How It Works
            </h1>

            <div className=" grid md:grid-cols-2  lg:grid-cols-3 mb-10 gap-4">
                <div className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food is Donated </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >Farms, restaurants, cafeterias, hotels, stadiums, and grocery stores post excess food in under a minute on the Waste No Food app.</p>
                </div>

                <div className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food is Secured
                    </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >Pre-vetted charities immediately get notified about food donations and can claim any donations they can use to serve hungry clients.</p>
                </div>

                <div className={`  hover:**:text-white hover:bg-primary duration-110  transition ease-in-out   bg-secondary/4 p-10`}>
                    <h1 className='text-center text-4xl mb-3 font-bold text-secondary'>Food Is Picked Up
                    </h1>
                    <p className='text-center mx-auto leading-6 w- tracking-normal text-secondary/70' >The charity, or a network of volunteers, picks up the food and serves it to hungry people.</p>
                </div>


            </div>

        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import userAxios from '../../hooks/userAxios';
import FoodCard from '../../components/FoodCard/FoodCard';
import { data } from 'react-router';

const AvailableFoods = () => {
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
            <h1 className='text-4xl text-secondary font-bold text-center mt-10 mb-2'>Available Foods</h1>
            <p className='text-center text-secondary/80'>Browse freshly shared meals from our community</p>

            <div className="grid grid-cols-1 md:grid-cols-2: lg:grid-cols-3 gap-4">

                {
                    foods.map(food => <FoodCard food={food} />)
                }




            </div>

        </div>
    );
};

export default AvailableFoods;
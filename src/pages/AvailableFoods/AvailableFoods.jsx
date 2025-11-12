import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/userAxios';
import FoodCard from '../../components/FoodCard/FoodCard';
import Loader from '../../components/Loader/Loader';

const AvailableFoods = () => {
    const axiosInstance = useAxios()
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance('/foods')
            .then(data => {
                setLoading(false)
                console.log(data.data)
                setFoods(data.data)
            }
            )
            .catch(error => {
                console.log(error);
            })


    }, [axiosInstance, setFoods])

    if (loading) {
        return <Loader />
    }

    return (
        <div className='w-10/12 mx-auto mb-20'>
            <h1 className='text-4xl text-secondary font-bold text-center mt-10 mb-2'>Available <span className='text-primary'>Foods</span></h1>
            <p className='text-center text-secondary/80'>Browse freshly shared meals from our community</p>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4">

                {
                    foods.map(food => <FoodCard food={food} />)
                }




            </div>

        </div>
    );
};

export default AvailableFoods;